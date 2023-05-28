from fastapi import APIRouter, Depends, HTTPException, status
from models.Models import Drink, Customer, Order, DrinkOrder
from dtos.OrderDTO import OrderDTO
from dtos.APIResponseDTO import APIResponseDTO
from helpers.DatabaseHelper import dbSession
from sqlalchemy import text

orderRouter = APIRouter()

@orderRouter.get("/orders", summary="Get all orders")
async def getAllOrders():

    query = text("""SELECT Orders.customer_id, Orders.order_date, Orders.branch_id, DrinkOrder.order_id, DrinkOrder.drink_id, DrinkOrder.quantity, Drinks.price FROM Orders LEFT JOIN DrinkOrder ON Orders.order_id = DrinkOrder.order_id JOIN Drinks ON DrinkOrder.drink_id = Drink.drink_id""")
    result = dbSession.execute(query)
    # orders = (
    #     dbSession.query(Order)
    #     .join(DrinkOrder, Order.order_id == DrinkOrder.order_id)
    #     .all()
    # )
    for order in result:
        print(order, "\n")
    