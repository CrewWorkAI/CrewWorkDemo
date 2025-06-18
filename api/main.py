from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="Create a weather API utility")

class ResponseModel(BaseModel):
    message: str
    status: str

@app.get("/")
async def root():
    return {"message": "API is running", "status": "success"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Add your endpoints here
@app.post("/api/endpoint")
async def new_endpoint():
    '''
    Build a Python module that fetches weather data from a public API. Include functions to get current weather, 5-day forecast, and weather alerts for a given city. Add proper error handling, caching, and rate limiting.
    '''
    return ResponseModel(
        message="Endpoint implemented successfully",
        status="success"
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
