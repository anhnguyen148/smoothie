from pydantic import BaseModel

class EmployeeSignupDTO(BaseModel):
    name: str
    email: str
    phone: str
    username: str
    password: str
    address: str
    branchId: int