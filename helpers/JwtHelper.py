import os
from datetime import datetime, timedelta
from typing import Union, Any
from jose import jwt
from dotenv import load_dotenv
from models.Models import Employee
from dtos.Auth import TokenPayload
from pydantic import ValidationError
from fastapi import Depends, HTTPException, status
from dtos.APIResponse import APIResponse
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordBearer


def createAccessToken(subject: Union[str, Any], expiresDelta: int = None) -> str:
    load_dotenv()
    if expiresDelta is not None:
        expiresDelta = datetime.utcnow() + expiresDelta
    else:
        expiresDelta = datetime.utcnow() + timedelta(minutes=int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")))

    toEncode = {
        "exp": expiresDelta,
        "sub": str(subject)
    }

    encodedJwt = jwt.encode(toEncode, os.getenv("JWT_SECRET_KEY"), os.getenv("ALGORITHM"))

    return encodedJwt

def createRefreshToken(subject: Union[str, Any], expiresDelta: int = None) -> str:
    if expiresDelta is not None:
        expiresDelta = datetime.utcnow() + expiresDelta
    else:
        expiresDelta = datetime.utcnow() + timedelta(minutes=int(os.getenv("REFRESH_TOKEN_EXPIRE_MINUTES")))

    toEncode = {
        "exp": expiresDelta,
        "sub": str(subject)
    }

    encodedJwt = jwt.encode(toEncode, os.getenv("JWT_REFRESH_SECRET_KEY"), os.getenv("ALGORITHM"))

    return encodedJwt


reuseableOauth = OAuth2PasswordBearer(
    tokenUrl="token"
)

async def getCurrentEmployee(token: str = Depends(reuseableOauth)) -> Employee:
    load_dotenv()
    try:
        payload = jwt.decode(
            token, os.getenv("JWT_SECRET_KEY"), os.getenv("ALGORITHM")
        )

        print(payload)

        tokenData = TokenPayload(**payload)

        if datetime.fromtimestamp(tokenData.exp) < datetime.now():
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail= APIResponse().badResponse(401, "Token is expired."),
                headers={"WWW-Authenticate": "Bearer"}
            )
    except (jwt.JWTError, ValidationError):
        raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail= APIResponse().badResponse(403, "Could not validate credentials."),
                headers={"WWW-Authenticate": "Bearer"}
            )
    
    

    return None