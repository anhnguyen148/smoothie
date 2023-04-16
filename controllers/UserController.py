from fastapi import APIRouter, Depends, HTTPException, status
from models.Models import Employee
from dtos.EmployeeSignUp import EmployeeSignupDTO
from dtos.APIResponse import APIResponse
from helpers.PasswordEncryptHelper import (
    getHashedPassword,
    verifyPassword
)
from helpers.DatabaseHelper import dbSession
from fastapi.encoders import jsonable_encoder
from helpers.JwtHelper import (
    createAccessToken,
    createRefreshToken  
)
from fastapi.security import OAuth2PasswordRequestForm

userRouter = APIRouter()

@userRouter.post("/employee/signup")
async def createEmployee(newEmployeeInfo: EmployeeSignupDTO):

    print(newEmployeeInfo.address)

    newEmployee = Employee()
    newEmployee.address = newEmployeeInfo.address
    newEmployee.email = newEmployeeInfo.email
    newEmployee.name = newEmployeeInfo.name
    newEmployee.username = newEmployeeInfo.username
    newEmployee.password = getHashedPassword(newEmployeeInfo.password)
    newEmployee.phone = newEmployeeInfo.phone
    newEmployee.branch_id = newEmployeeInfo.branchId

    dbSession.add(newEmployee)
    dbSession.commit()

    return APIResponse().successResponse("New employee is registered successfully!", newEmployee)

@userRouter.post("/employee/login")
async def login(employeeSigninInfo: OAuth2PasswordRequestForm = Depends()):
    eUsername = employeeSigninInfo.username
    ePassword = employeeSigninInfo.password

    targetUser = Employee.query.filter(eUsername == Employee.username).first()

    if targetUser is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=jsonable_encoder(APIResponse().successResponse("Your username is incorrect!", responseBody))
        )

    if (verifyPassword(ePassword, targetUser.password)):
        responseBody = {
            "access_token": createAccessToken(targetUser.username),
            "refresh_token": createRefreshToken(targetUser.username),
        }
        return responseBody
    else:
        responseBody = None
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=jsonable_encoder(APIResponse().successResponse("Your password is incorrect!", responseBody))
        )