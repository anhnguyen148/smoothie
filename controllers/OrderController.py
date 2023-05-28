from fastapi import APIRouter, Depends, HTTPException, status
from models.Models import Drink, Customer, Order, DrinkOrder
from dtos.OrderDTO import OrderDTO
from dtos.APIResponseDTO import APIResponseDTO
from helpers.DatabaseHelper import dbSession
from sqlalchemy import text

orderRouter = APIRouter()

@orderRouter.get("/orders", summary="Get all orders")
async def getAllOrders():
    qu = dbSession.query(Order, DrinkOrder, Customer).join(DrinkOrder, Order.order_id == DrinkOrder.order_id).join(Customer, Order.customer_id == Customer.customer_id).all()
    res = ""
    for q in qu:
        order, order_detail, customer = q
        res = res + str(order.order_id) + " " + str(order_detail.order_id) + " " + str(customer.last_name) + "\n"

    return res



    