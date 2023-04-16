from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from controllers.DrinkController import drinkRouter
from controllers.ImageController import imageRouter
from controllers.UserController import userRouter

from models.Models import Employee

from helpers.JwtHelper import getCurrentEmployee

app = FastAPI(title="Smoothie API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True
)

app.include_router(drinkRouter)
app.include_router(imageRouter)
app.include_router(userRouter)

@app.get("/me")
async def get_me(employee: Employee = Depends(getCurrentEmployee)):
    return employee
