import json

class APIResponse:
    code = None
    message = None
    data = None
    
    def successResponse(self, message, data):
        self.code = 200
        self.message = message
        self.data = data

        return self

    def badResponse(self, code, message, data):
        self.code = code
        self.message = message
        self.data = data

        return self