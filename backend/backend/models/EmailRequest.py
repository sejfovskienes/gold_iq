from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class EmailRequest(Base):
    __tablename__ = "email_requests"

    id = Column(Integer, primary_key=True, index=True)
    to = Column(String, nullable=False)
    subject = Column(String, nullable=False)
    body = Column(String, nullable=False)
