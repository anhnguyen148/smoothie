from pydantic import BaseModel

class EmployeeDTO(BaseModel):
    name: str
    email: str
    phone: int
    username: str
    password: str
    address: str
    branchId: int
    position: str

class EmployeeSignupDTO(BaseModel):
    name: str
    email: str
    phone: str
    username: str
    password: str
    address: str
    branchId: int

class EmployeeSigninDTO(BaseModel):
    username: str
    password: str