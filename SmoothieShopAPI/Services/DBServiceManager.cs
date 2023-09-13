using SmoothieShopAPI.Models;

namespace SmoothieShopAPI.Services
{
    public class DBServiceManager
    {
        private readonly SmoothieContext _dbContext;

        public BranchService BranchService { get; }

        public DBServiceManager(
                SmoothieContext dbContext,
                BranchService? branchService = null
            )
        { 
            _dbContext = dbContext;
            BranchService = branchService ?? new BranchService(dbContext);
        }
    }
}
