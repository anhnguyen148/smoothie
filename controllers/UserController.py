from fastapi import APIRouter, status, HTTPException
from fastapi.responses import RedirectResponse
from dtos.Auth import EmployeeOut
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
from fastapi import Depends
from helpers.JwtHelper import getCurrentEmployee

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
async def login(employeeSigninInfo: EmployeeSigninDTO):
    eUsername = employeeSigninInfo.username
    ePassword = employeeSigninInfo.password

    targetUser = Employee.query.filter(eUsername == Employee.username).first()

    if (verifyPassword(ePassword, targetUser.password)):
        responseBody = {
            "access_token": createAccessToken(targetUser.username),
            "refresh_token": createRefreshToken(targetUser.username),
        }
        return APIResponse().successResponse("Login successfully!", responseBody)    
    else:
        responseBody = None
        return APIResponse().successResponse("Your username and password is incorrect!", responseBody)
    

@userRouter.get('/me', summary='Get details of currently logged in user', response_model=EmployeeOut)
async def getEmployee(employee: Employee = Depends(getCurrentEmployee)):
    return employee

    
