from pydantic import BaseModel

class DrinkDTO(BaseModel):
    name: str
    description: str
    price: float
    image_name: str
    type: str