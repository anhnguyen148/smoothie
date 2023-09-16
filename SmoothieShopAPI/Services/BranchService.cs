using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using SmoothieShopAPI.Models;
using SmoothieShopAPI.Models.DTOs;

namespace SmoothieShopAPI.Services
{
    public interface IBranchService
    {
        /// <summary>
        /// Returns a new <see cref="IDbContextTransaction"/> instance for the current database context.
        /// </summary>
        /// <returns></returns>
        public IDbContextTransaction BeginTransaction();

        /// <summary>
        /// Return a list of <see cref="Branch"/> instance.
        /// </summary>
        /// <returns></returns>
        public Task<IEnumerable<Branch>> GetAllBranches();

        /// <summary>
        /// Return a <see cref="Branch"/> instance, given the branch id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Task<Branch?> GetABranchByID(int id);

        /// <summary>
        /// Attemp to add a new branch, and return a <see cref="Branch"/> object, which is the branch after being added to the DB.
        /// </summary>
        /// <param name="newBranch"></param>
        /// <returns></returns>
        public Task<Branch> AddABranch(BranchDTO newBranch);

        /// <summary>
        /// Attemp to update a branch, and return a <see cref="Branch"/> object, which is the branch after being updated to the DB.
        /// </summary>
        /// <param name="branchID"></param>
        /// <param name="updateBranch"></param>
        /// <returns></returns>
        public Task<Branch?> UpdateBranch(int branchID, BranchDTO updateBranch);

        /// <summary>
        /// Attemp to remove a branch, return true if success, otherwise, return false.
        /// </summary>
        /// <param name="branchID"></param>
        /// <returns></returns>
        public Task<bool> RemoveBranch(int branchID);
    }

    public class BranchService : IBranchService
    {
        private readonly SmoothieContext _dbContext;

        public BranchService(SmoothieContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        /// <inheritdoc/>
        public async Task<Branch> AddABranch(BranchDTO newBranch)
        {
            var newBranchObj = new Branch();
            newBranchObj.Name = newBranch.Name;
            newBranchObj.Location = newBranch.Location;
            newBranchObj.Phone = newBranch.Phone;

            var addedBranch = _dbContext.Branches.Add(newBranchObj);
            await _dbContext.SaveChangesAsync();

            return addedBranch.Entity;
        }

        /// <inheritdoc/>
        public IDbContextTransaction BeginTransaction()
        {
            return _dbContext.Database.BeginTransaction();
        }

        /// <inheritdoc/>
        public async Task<Branch?> GetABranchByID(int id)
        {
            return await _dbContext.Branches.FirstOrDefaultAsync(b => b.BranchId == id);
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Branch>> GetAllBranches()
        {
            return await _dbContext.Branches.ToListAsync();
        }

        /// <inheritdoc/>
        public async Task<bool> RemoveBranch(int branchID)
        {
            var targetBranch = _dbContext.Branches.FirstOrDefault(b => b.BranchId == branchID);

            if (targetBranch == null) {
                throw new ArgumentNullException("The target branch is not exist.", nameof(branchID));
            }

            var deletedBranch = _dbContext.Branches.Remove(targetBranch);
            await _dbContext.SaveChangesAsync();

            return true;
        }

        /// <inheritdoc/>
        public async Task<Branch?> UpdateBranch(int branchID, BranchDTO updateBranch)
        {
            if (branchID < 1)
            {
                throw new ArgumentOutOfRangeException("Invalid branch id.", nameof(branchID));
            }

            if (updateBranch == null) 
            {
                throw new ArgumentOutOfRangeException("Invalid branch updated data.", nameof(updateBranch));
            }

            var targetBranch = _dbContext.Branches.FirstOrDefault(b => b.BranchId == branchID);

            if (targetBranch == null)
            {
                throw new ArgumentNullException("The target branch is not exist.", nameof(targetBranch));
            }

            targetBranch.Location = updateBranch.Location;
            targetBranch.Phone = updateBranch.Phone;
            targetBranch.Name = updateBranch.Name;

            var res = _dbContext.Branches.Update(targetBranch);
            await _dbContext.SaveChangesAsync();

            if (res == null)
            {
                return null;
            }
            else {
                return await _dbContext.Branches.FirstAsync(b => b.BranchId == branchID);
            }

        }
    }
}
