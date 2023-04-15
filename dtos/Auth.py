from uuid import UUID
from pydantic import BaseModel, Field

class TokenSchema(BaseModel):
    accessToken: str
    refreshToken: str

class TokenPayload(BaseModel):
    sub: str = None
    exp: int = None

class EmployeeAuth(BaseModel):
    username: str
    password: str

class EmployeeOut(BaseModel):
    id: UUID
    username: str

class SystemEmployee(EmployeeOut):
    password: str