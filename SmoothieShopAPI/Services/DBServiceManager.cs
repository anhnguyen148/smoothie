using SmoothieShopAPI.Models;

namespace SmoothieShopAPI.Services
{
    public class DBServiceManager
    {
        private readonly SmoothieContext _dbContext;

        public BranchService BranchService { get; }
        public PasswordService PasswordService { get; }
        public CustomerService CustomerService { get; }

        public DBServiceManager(
                SmoothieContext dbContext,
                BranchService? branchService = null,
                PasswordService? passwordService = null,
                CustomerService? customerService = null
            )
        { 
            _dbContext = dbContext;
            BranchService = branchService ?? new BranchService(dbContext);
            PasswordService = passwordService ?? new PasswordService();
            CustomerService = customerService ?? new CustomerService(dbContext, PasswordService);
        }
    }
}
