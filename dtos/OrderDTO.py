from pydantic import BaseModel

class OrderDTO(BaseModel):
    orderId: int
    order_date: str
    customer_lname: str
    customer_fname: str
    phone: int
    address_line_1: str
    address_line_2: str
    city: str
    zip: int
    state: str
    country: str
    email: str
    drink_name: str
    price: float
    quantity: int    
    total: float
    status: str
