from sqlalchemy import Column, DECIMAL, ForeignKey, String, Table
from sqlalchemy.dialects.mysql import BIGINT, INTEGER, SMALLINT
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from helpers.DatabaseHelper import Base

metadata = Base.metadata

class Branch(Base):
    __tablename__ = 'Branches'
    branch_id = Column(INTEGER(11), primary_key=True)
    name = Column(String(20))
    location = Column(String(20))
    phone = Column(BIGINT(20))
    drinks = relationship('Drink', secondary='DrinkBranch')

class Customer(Base):
    __tablename__ = 'Customers'
    customer_id = Column(INTEGER(11), primary_key=True)
    first_name = Column(String(20))
    last_name = Column(String(20))
    phone = Column(BIGINT(20))
    username = Column(String(20))
    password = Column(String(40))
    address_line_1 = Column(String(100))
    address_line_2 = Column(String(100))
    city = Column(String(100))
    zip = Column(String(100))
    state = Column(String(100))
    country = Column(String(100))

class Drink(Base):
    __tablename__ = 'Drinks'
    drink_id = Column(INTEGER(11), primary_key=True)
    name = Column(String(30))
    description = Column(String(100))
    image_name = Column(String(20))
    price = Column(DECIMAL(6, 2))
    type = Column(String(20))

t_DrinkBranch = Table(
    'DrinkBranch', metadata,
    Column('drink_id', ForeignKey('Drinks.drink_id'), primary_key=True, nullable=False),
    Column('branch_id', ForeignKey('Branches.branch_id'), primary_key=True, nullable=False, index=True)
)

class Employee(Base):
    __tablename__ = 'Employees'
    employee_id = Column(INTEGER(11), primary_key=True)
    name = Column(String(30))
    email = Column(String(20))
    phone = Column(BIGINT(20))
    username = Column(String(20))
    password = Column(String(50))
    address = Column(String(40))
    branch_id = Column(ForeignKey('Branches.branch_id'), index=True)

    branch = relationship('Branch')

class Order(Base):
    __tablename__ = 'Orders'
    order_id = Column(INTEGER(11), primary_key=True)
    order_date = Column(String(20))
    total = Column(DECIMAL(6, 2))
    customer_id = Column(ForeignKey('Customers.customer_id'), index=True)
    branch_id = Column(ForeignKey('Branches.branch_id'), index=True)
    branch = relationship('Branch')
    customer = relationship('Customer')

class DrinkOrder(Base):
    __tablename__ = 'DrinkOrder'
    order_id = Column(ForeignKey('Orders.order_id'), primary_key=True, nullable=False)
    drink_id = Column(ForeignKey('Drinks.drink_id'), primary_key=True, nullable=False, index=True)
    quantity = Column(SMALLINT(5))
    drink = relationship('Drink')
    order = relationship('Order')
