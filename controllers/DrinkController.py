from fastapi import APIRouter
from models.Models import Drink
from fastapi.encoders import jsonable_encoder
from dtos.APIResponse import APIResponse

drinkRouter = APIRouter()

@drinkRouter.get("/drinks")
async def getAllDrink():
    drinks = Drink.query.all()
    return APIResponse().successResponse("Here is the list of drinks.", drinks)