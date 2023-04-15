import os
from fastapi import APIRouter
from fastapi.responses import FileResponse

imageRouter = APIRouter()

@imageRouter.get("/public/image/{imageName}")
async def getImage(imageName: str):
    if os.path.isfile("assets/imgs/" + imageName):
        return FileResponse("assets/imgs/" + imageName)
    else:
        return None