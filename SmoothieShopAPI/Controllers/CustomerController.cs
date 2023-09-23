using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmoothieShopAPI.Models;
using SmoothieShopAPI.Models.DTOs;
using SmoothieShopAPI.Services;

namespace SmoothieShopAPI.Controllers
{
    [Route("api/customer")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private DBServiceManager _dbServiceManager;

        public CustomerController(SmoothieContext dbContext)
        {
            _dbServiceManager = new DBServiceManager(dbContext);
        }

        [HttpPost]
        [Consumes("application/json")]
        public async Task<Customer?> AddANewCustomer(CustomerDTO newCustomer)
        {
            try
            {
                return await _dbServiceManager.CustomerService.AddACustomer(newCustomer);
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
