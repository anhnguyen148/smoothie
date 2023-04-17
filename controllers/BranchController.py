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

@branchController.put("/branch/{branchId}")
async def updateBranch(branchId: int, inputBranch: BranchDTO):
    targetBranch = Branch.query.filter(Branch.branch_id == branchId).first()

    if targetBranch is None:
        apiResponse = APIResponseDTO().badResponse(400, "Target branch is not found.", None)
    else:
        targetBranch.name = inputBranch.name
        targetBranch.location = inputBranch.location
        targetBranch.phone = inputBranch.phone

        dbSession.flush()
        dbSession.commit()

        apiResponse = APIResponseDTO().successResponse("Update the branch successfully.", None)

    return apiResponse

@branchController.delete("/drink/{branchId}")
async def deleteBranch(branchId: int):
    targetBranch = Branch.query.filter(Branch.branch_id == branchId).first()

    if targetBranch is None:
        apiResponse = APIResponseDTO().badResponse(400, "Target branch is not found.", None)
    else:
        dbSession.delete(targetBranch)

        dbSession.flush()
        dbSession.commit()

        apiResponse = APIResponseDTO().successResponse("Delete the branch succesfully!", None)

    return apiResponse
