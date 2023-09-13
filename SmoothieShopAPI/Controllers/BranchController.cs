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
            return await _dbServiceManager.BranchService.GetAllBranches();
        }

        [HttpPost]
        [Consumes("application/json")]
        public async Task<Branch> AddANewBranch(BranchDTO newBranch)
        { 
            return await _dbServiceManager.BranchService.AddABranch(newBranch);
        }
        
    }
}
