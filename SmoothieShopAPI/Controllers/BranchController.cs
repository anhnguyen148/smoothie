using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmoothieShopAPI.Models;

namespace SmoothieShopAPI.Controllers
{
    [Route("api/branch")]
    [ApiController]
    public class BranchController : ControllerBase
    {
        private SmoothieContext _dbContext;

        public BranchController(SmoothieContext dbContext)
        {
            this._dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IEnumerable<Branch>> GetGreeting()
        {
            return await _dbContext.Branches.ToListAsync();
        }
        
    }
}
