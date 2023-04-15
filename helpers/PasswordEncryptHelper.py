from passlib.context import CryptContext

passwordContext = CryptContext(schemes=["bcrypt"], deprecated="auto")

def getHashedPassword(password: str) -> str:
    return passwordContext.hash(password)

def verifyPassword(password: str, hashedPassword: str) -> bool:
    return passwordContext.verify(password, hashedPassword)