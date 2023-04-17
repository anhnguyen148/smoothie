from fastapi import APIRouter, Depends
from models.Models import Drink
from fastapi.encoders import jsonable_encoder
from dtos.APIResponseDTO import APIResponseDTO
from helpers.JwtHelper import getCurrentEmployee
from dtos.DrinkDTO import DrinkDTO
from helpers.DatabaseHelper import dbSession
from sqlalchemy import delete

drinkRouter = APIRouter()

@drinkRouter.get("/drinks", summary="Get all drink")
async def getAllDrink():
    drinks = Drink.query.all()
    apiResponse = APIResponseDTO().successResponse("Here is the list of drinks.", drinks)

    return apiResponse

@drinkRouter.post("/drinks", summary="Add a new drink")
async def addDrink(inputDrink: DrinkDTO):
    newDrink = Drink()
    newDrink.name = inputDrink.name
    newDrink.description = inputDrink.description
    newDrink.image_name = inputDrink.image_name
    newDrink.price = inputDrink.price
    newDrink.type = inputDrink.type

    addedDrink = dbSession.add(newDrink)
    dbSession.commit()

    apiResponse = APIResponseDTO().successResponse("Add a new drink successfully!", addedDrink)

    return apiResponse

@drinkRouter.put("/drinks/{drinkId}", summary="Update a drink")
async def updateDrink(drinkId: int, inputDrink: DrinkDTO):

    targetDrink = Drink.query.filter(Drink.drink_id == drinkId).first()

    if targetDrink is None:
        apiResponse = APIResponseDTO().badResponse(400, "The target drink is not found.", None)
    else:
        targetDrink.drink_id = drinkId
        targetDrink.name = inputDrink.name
        targetDrink.description = inputDrink.description
        targetDrink.image_name = inputDrink.image_name
        targetDrink.price = inputDrink.price
        targetDrink.type = inputDrink.type

        dbSession.flush()
        dbSession.commit()

        apiResponse = APIResponseDTO().successResponse("Update the drink succesfully!", None)

    return apiResponse

@drinkRouter.delete("/drinks/{drinkId}", summary="Delete a drink")
async def deleteDrink(drinkId: int):
    targetDrink = Drink.query.filter(Drink.drink_id == drinkId).first()

    if targetDrink is None:
        apiResponse = APIResponseDTO().badResponse(400, "The target drink is not found.", None)
    else:
        dbSession.delete(targetDrink)

        dbSession.flush()
        dbSession.commit()

        apiResponse = APIResponseDTO().successResponse("Delete the drink succesfully!", None)

    return apiResponse