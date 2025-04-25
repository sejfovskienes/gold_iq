from pydantic import BaseModel, EmailStr

class SendEmailDto(BaseModel):
    to: EmailStr
    subject: str
    body: str