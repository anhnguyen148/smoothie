from pydantic import BaseModel

class CustomerSignupDTO(BaseModel):
    email: str
    username: str
    password: str

class CustomerSigninDTO(BaseModel):
    username: str
    password: str