using System;
using System.Collections.Generic;

namespace SmoothieShopAPI.Models;

public partial class Drink
{
    public int DrinkId { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public string? ImageName { get; set; }

    public decimal? Price { get; set; }

    public string? Type { get; set; }

    public virtual ICollection<DrinkOrder> DrinkOrders { get; set; } = new List<DrinkOrder>();
}
