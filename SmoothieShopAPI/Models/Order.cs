using System;
using System.Collections.Generic;

namespace SmoothieShopAPI.Models;

public partial class Order
{
    public int OrderId { get; set; }

    public string? OrderDate { get; set; }

    public decimal? Total { get; set; }

    public string? Status { get; set; }

    public int? CustomerId { get; set; }

    public int? BranchId { get; set; }

    public int? EmployeeId { get; set; }

    public virtual Branch? Branch { get; set; }

    public virtual Customer? Customer { get; set; }

    public virtual ICollection<DrinkOrder> DrinkOrders { get; set; } = new List<DrinkOrder>();

    public virtual Employee? Employee { get; set; }
}
