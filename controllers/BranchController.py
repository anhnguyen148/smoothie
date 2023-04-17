from fastapi import APIRouter, Depends
from models.Models import Branch
from dtos.APIResponseDTO import APIResponseDTO
from sqlalchemy.inspection import inspect
from dtos.BranchDTO import BranchDTO
from helpers.DatabaseHelper import dbSession

branchController = APIRouter()

@branchController.get("/branch")
async def getAllBranch():
    branches = Branch.query.all()

    return APIResponseDTO().successResponse("This is the list of branches.", branches)

@branchController.post("/branch")
async def addNewBranch(inputBranch: BranchDTO):
    newBranch = Branch()
    newBranch.name = inputBranch.name
    newBranch.location = inputBranch.location
    newBranch.phone = inputBranch.phone
    
    addedBranch = dbSession.add(newBranch)
    dbSession.commit()

    apiResponse = APIResponseDTO().successResponse("Add a new branch successfully.", addedBranch)

    return apiResponse

