import json
from fastapi.encoders import jsonable_encoder

class APIResponse:
    code = None
    message = None
    data = None
    
    def successResponse(self, message, data):
        self.code = 200
        self.message = message
        self.data = jsonable_encoder(data) if data is not None else None

        return self

    def badResponse(self, code, message, data):
        self.code = code
        self.message = message
        self.data = jsonable_encoder(data) if data is not None else None

        return self