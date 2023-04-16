from fastapi import APIRouter, Depends
from models.Models import Drink
from fastapi.encoders import jsonable_encoder
from dtos.APIResponse import APIResponse
from helpers.JwtHelper import getCurrentEmployee

drinkRouter = APIRouter()

@drinkRouter.get("/drinks")
async def getAllDrink(apiResponse: APIResponse = Depends(getCurrentEmployee)):
    drinks = Drink.query.all()
    apiResponse = APIResponse().successResponse("Here is the list of drinks.", drinks)

    return apiResponse