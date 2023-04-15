import os
from datetime import datetime, timedelta
from typing import Union, Any
from jose import jwt
from dotenv import load_dotenv

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