from pydantic import BaseModel

class UserRegisterDto(BaseModel):
    full_name: str
    email: str
    password: str
    