from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from controllers.DrinkController import drinkRouter
from controllers.ImageController import imageRouter
from controllers.UserController import userRouter

app = FastAPI()

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

@app.get("/")
async def getGreeting():
    return "This is Anh Nguyen smoothie API!"

