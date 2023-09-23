using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using SmoothieShopAPI.Models;
using SmoothieShopAPI.Models.DTOs;

namespace SmoothieShopAPI.Services
{
    public interface ICustomerService
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public IDbContextTransaction BeginTransaction();
        /// <summary>
        /// 
        /// </summary>
        /// <param name="branchID"></param>
        /// <returns></returns>
        public Task<IEnumerable<Customer>> GetAllCustomersByBranchID(int branchID);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="customerID"></param>
        /// <returns></returns>
        public Task<Customer?> GetCustomerByID(int customerID);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="addCustomer"></param>
        /// <returns></returns>
        public Task<Customer> AddACustomer(CustomerDTO addCustomer);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="customerID"></param>
        /// <param name="updateCustomer"></param>
        /// <returns></returns>
        public Task<Customer> UpdateCustomer(int customerID, CustomerDTO updateCustomer);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="customerID"></param>
        /// <returns></returns>
        public Task<bool> RemoveACustomer(int customerID);
    }

    /// <inheritdoc/>
    public class CustomerService : ICustomerService
    {
        private readonly SmoothieContext _dbContext;
        private readonly IPasswordService _passwordService;

        public CustomerService(SmoothieContext dbContext, IPasswordService passwordService)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
            _passwordService = passwordService;
        }

        /// <inheritdoc/>
        public IDbContextTransaction BeginTransaction()
        {
            throw new NotImplementedException();
        }

        /// <inheritdoc/>
        public async Task<Customer> AddACustomer(CustomerDTO addCustomer)
        {
            var newCustomerObj = new Customer();
            newCustomerObj.FirstName = addCustomer.FirstName;
            newCustomerObj.LastName = addCustomer.LastName;
            newCustomerObj.Phone = addCustomer.Phone;
            newCustomerObj.Username = addCustomer.Username;
            newCustomerObj.Password = _passwordService.EncryptPassword(addCustomer.Password);
            newCustomerObj.AddressLine1 = addCustomer.AddressLine1;
            newCustomerObj.AddressLine2 = addCustomer.AddressLine2;
            newCustomerObj.City = addCustomer.City;
            newCustomerObj.Zip = addCustomer.Zip;
            newCustomerObj.State = addCustomer.State;
            newCustomerObj.Country = addCustomer.Country;
            newCustomerObj.Email = addCustomer.Email;

            var addedCustomer = await _dbContext.Customers.AddAsync(newCustomerObj);
            await _dbContext.SaveChangesAsync();

            return addedCustomer.Entity;
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Customer>> GetAllCustomersByBranchID(int branchID)
        {
            return await _dbContext.Customers.ToListAsync();
        }

        /// <inheritdoc/>
        public async Task<Customer?> GetCustomerByID(int customerID)
        {
            return await _dbContext.Customers.FirstOrDefaultAsync(c => c.CustomerId == customerID);
        }

        /// <inheritdoc/>
        public Task<bool> RemoveACustomer(int customerID)
        {
            throw new NotImplementedException();
        }

        /// <inheritdoc/>
        public Task<Customer> UpdateCustomer(int customerID, CustomerDTO updateCustomer)
        {
            throw new NotImplementedException();
        }
    }
}
