from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter(prefix="/api/v1/string", tags=["string"])

class StringCreate(BaseModel):
    name: str
    description: Optional[str] = None

class StringResponse(BaseModel):
    id: int
    name: str
    description: Optional[str] = None
    created_at: str

@router.get("/", response_model=List[StringResponse])
async def get_strings():
    """Get all strings"""
    # Implementation here
    return []

@router.post("/", response_model=StringResponse)
async def create_string(data: StringCreate):
    """Create new string"""
    # Implementation here
    return StringResponse(id=1, **data.dict(), created_at="2023-01-01T00:00:00")

@router.get("/{{id}}", response_model=StringResponse)
async def get_string(id: int):
    """Get string by ID"""
    # Implementation here
    raise HTTPException(status_code=404, detail="String not found")
