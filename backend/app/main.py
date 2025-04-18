from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {"message":"Succesfully connected to FastAPI backend."}


