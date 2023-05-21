from fastapi import APIRouter, Depends, HTTPException, status
from models.Models import Employee, Customer
from dtos.EmployeeDTO import EmployeeSignupDTO
from dtos.APIResponseDTO import APIResponseDTO
from dtos.CustomerDTO import CustomerSignupDTO
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

@userRouter.get("/employees", summary="Get All Employees")
async def getAllEmployee():
    employees = Employee.query.all()
    apiResponse = APIResponseDTO().successResponse("Here is the list of employees.", employees)
    return apiResponse


@userRouter.post("/employees/signup")
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

    return APIResponseDTO().successResponse("New employee is registered successfully!", newEmployee)

@userRouter.post("/customers/signup")
async def createCustomer(newCustomerInfo: CustomerSignupDTO):
    newCustomer = Customer()
    newCustomer.email = newCustomerInfo.email
    newCustomer.username = newCustomerInfo.username
    newCustomer.password = getHashedPassword(newCustomerInfo.password)

    dbSession.add(newCustomer)
    dbSession.commit()

    return APIResponseDTO().successResponse("New customer is registered successfully!", newCustomer)

@userRouter.post("/employees/login")
async def login(employeeSigninInfo: OAuth2PasswordRequestForm = Depends()):
    eUsername = employeeSigninInfo.username
    ePassword = employeeSigninInfo.password

    targetUser = Employee.query.filter(eUsername == Employee.username).first()

    if targetUser is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=jsonable_encoder(APIResponseDTO().successResponse("Your username is incorrect!", None))
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
            detail=jsonable_encoder(APIResponseDTO().successResponse("Your password is incorrect!", responseBody))
        )