import os
from datetime import datetime, timedelta
from typing import Union, Any
from jose import jwt
from dotenv import load_dotenv
from models.Models import Employee
from pydantic import ValidationError
from fastapi import Depends, HTTPException, status
from dtos.APIResponseDTO import APIResponseDTO
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordBearer


def createAccessToken(subject: Union[str, Any], expiresDelta: int = None) -> str:
    load_dotenv()
    if expiresDelta is not None:
        expiresDelta = datetime.utcnow() + expiresDelta
    else:
        expiresDelta = datetime.utcnow(
        ) + timedelta(minutes=int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")))

    toEncode = {
        "exp": expiresDelta,
        "sub": str(subject)
    }

    encodedJwt = jwt.encode(toEncode, os.getenv(
        "JWT_SECRET_KEY"), os.getenv("ALGORITHM"))

    return encodedJwt


def createRefreshToken(subject: Union[str, Any], expiresDelta: int = None) -> str:
    if expiresDelta is not None:
        expiresDelta = datetime.utcnow() + expiresDelta
    else:
        expiresDelta = datetime.utcnow(
        ) + timedelta(minutes=int(os.getenv("REFRESH_TOKEN_EXPIRE_MINUTES")))

    toEncode = {
        "exp": expiresDelta,
        "sub": str(subject)
    }

    encodedJwt = jwt.encode(toEncode, os.getenv(
        "JWT_REFRESH_SECRET_KEY"), os.getenv("ALGORITHM"))

    return encodedJwt


reusableOauth = OAuth2PasswordBearer(
    tokenUrl="/employee/login",
    scheme_name="JWT"
)


async def getCurrentEmployee(token: str = Depends(reusableOauth)):
    try:
        payload = jwt.decode(
            token, os.getenv("JWT_SECRET_KEY"), algorithms=[os.getenv("ALGORITHM")]
        )

        if datetime.fromtimestamp(payload["exp"]) < datetime.now():
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token expired",
                headers={"WWW-Authenticate": "Bearer"},
            )
    except (jwt.JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    currentEmployee = Employee.query.filter(
        Employee.username == payload["sub"]).first()

    if currentEmployee is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Could not find user",
        )

    return currentEmployee
