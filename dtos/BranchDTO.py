from pydantic import BaseModel
from typing import List
from models.Models import Drink


class BranchDTO(BaseModel):
    name: str
    location: str
    phone: str