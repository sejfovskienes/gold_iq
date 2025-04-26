from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import EmailStr
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from fastapi.middleware.cors import CORSMiddleware

from models.EmailRequest import EmailRequest
from models.User import User, Base

from models.dto.UserRegisterDto import UserRegisterDto
from models.dto.UserLoginDto import UserLoginDto
from models.dto.SendEmailDto import SendEmailDto

from services.JwtHandlingService import make_acces_token

#--- App Configuration

app = FastAPI()

origins = [
    'http://localhost:3000',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


DATABASE_URL = "sqlite:///./goldiq_db"  
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


#--- Endpoints

@app.get("/")
def root():
    return {"message":"Succesfully connected to FastAPI backend."}


@app.post("/send-email")
def send_email(request: SendEmailDto, db: Session = Depends(get_db)): 
    db_email = EmailRequest(
        to=request.to,
        subject=request.subject,
        body=request.body
    )
    db.add(db_email)
    db.commit()
    db.refresh(db_email)

    return {'message': 'email sent successfully'}
    

@app.post("/register")
def register(user: UserRegisterDto, db:Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    new_user = User(
        full_name = user.full_name,
        email = user.email,
        password = pwd_context.hash(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message" : "user registered succesfullt"}

@app.post("/login")
def login(user: UserLoginDto, db: Session = Depends(get_db)):
    user_in_db = db.query(User).filter(User.email == user.email).first()

    if not user_in_db:
        raise HTTPException(status_code=404, detail="User not found, try to register.")
    
    if not pwd_context.verify(user.password, user_in_db.password):
        raise HTTPException(status_code=404, detail="User password do not match.")
    
    token = make_acces_token(data = {"sub": user_in_db.email})
    
    return {
        "access_token": token,
        "token_type": "bearer",
        "full_name": user_in_db.full_name,
    }