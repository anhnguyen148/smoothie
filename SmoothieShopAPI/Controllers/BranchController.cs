using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmoothieShopAPI.Models;
using SmoothieShopAPI.Models.DTOs;
using SmoothieShopAPI.Services;

namespace SmoothieShopAPI.Controllers
{
    [Route("api/branch")]
    [ApiController]
    public class BranchController : ControllerBase
    {
        private DBServiceManager _dbServiceManager;

        public BranchController(SmoothieContext dbContext)
        {
            this._dbServiceManager = new DBServiceManager(dbContext);
        }

        [HttpGet]
        public async Task<IEnumerable<Branch>> GetGreeting()
        {
            try
            {
                return await _dbServiceManager.BranchService.GetAllBranches();
            }
            catch (Exception ex)
            {
                return new List<Branch>();
            }

        }

        [HttpPost]
        [Consumes("application/json")]
        public async Task<Branch> AddANewBranch(BranchDTO newBranch)
        {
            try
            {
                return await _dbServiceManager.BranchService.AddABranch(newBranch);
            }
            catch (Exception ex)
            {
                return null;
            }

        }

        [HttpGet]
        [Route("{id}")]
        [Consumes("application/json")]
        public async Task<Branch?> GetBranchByID(int id)
        {
            try
            {
                return await _dbServiceManager.BranchService.GetABranchByID(id);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [HttpDelete]
        [Route("{id}")]
        [Consumes("application/json")]
        public async Task<bool> RemoveBranchByID(int id)
        {
            try
            {
                return await _dbServiceManager.BranchService.RemoveBranch(id);
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        [HttpPut]
        [Route("{id}")]
        [Consumes("application/json")]
        public async Task<Branch?> UpdateBranchByID(int id, BranchDTO updateBranch)
        {
            try
            {
                return await _dbServiceManager.BranchService.UpdateBranch(id, updateBranch);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

    }
}
