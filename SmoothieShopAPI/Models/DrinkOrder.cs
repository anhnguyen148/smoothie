using System;
using System.Collections.Generic;

namespace SmoothieShopAPI.Models;

public partial class DrinkOrder
{
    public int OrderId { get; set; }

    public int DrinkId { get; set; }

    public short? Quantity { get; set; }

    public virtual Drink Drink { get; set; } = null!;

    public virtual Order Order { get; set; } = null!;
}
