using System;
using System.Collections.Generic;

namespace SmoothieShopAPI.Models;

public partial class Branch
{
    public int BranchId { get; set; }

    public string? Name { get; set; }

    public string? Location { get; set; }

    public string? Phone { get; set; }

    public virtual ICollection<Employee> Employees { get; set; } = new List<Employee>();

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
}
