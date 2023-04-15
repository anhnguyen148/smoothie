from fastapi import APIRouter, status, HTTPException
from fastapi.responses import RedirectResponse
from models.Models import Employee
from dtos.EmployeeSignUp import EmployeeSignupDTO
from dtos.APIResponse import APIResponse
from helpers.PasswordEncryptHelper import getHashedPassword
from helpers.DatabaseHelper import dbSession

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

    return APIResponse().successResponse("Good!", None)

