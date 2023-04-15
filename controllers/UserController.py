from fastapi import APIRouter, status, HTTPException
from fastapi.responses import RedirectResponse
from models.Models import Employee
from dtos.EmployeeSignUp import EmployeeSignupDTO, EmployeeSigninDTO
from dtos.APIResponse import APIResponse
from helpers.PasswordEncryptHelper import (
    getHashedPassword,
    verifyPassword
)
from helpers.DatabaseHelper import dbSession
from fastapi.encoders import jsonable_encoder
from helpers.JwtHelper import (
    createAccessToken,
    createRefreshToken,
    
)

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

    return APIResponse().successResponse("New employee is registered successfully!", jsonable_encoder(newEmployee))

@userRouter.post("/employee/login")
async def login(employeeSigninInfo: EmployeeSigninDTO):
    eUsername = employeeSigninInfo.username
    ePassword = employeeSigninInfo.password

    targetUser = Employee.query.filter(eUsername == Employee.username).first()

    print("Here", targetUser.password)

    if (verifyPassword(ePassword, targetUser.password)):
        print("ok")
    

    responseBody = {
        "access_token": createAccessToken(targetUser.email),
        "refresh_token": createRefreshToken(targetUser.email),
    }

    return APIResponse().successResponse("here is your token", responseBody)    
