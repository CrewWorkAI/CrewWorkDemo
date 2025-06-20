from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter(prefix="/api/v1/user", tags=["user"])

class UserCreate(BaseModel):
    name: str
    description: Optional[str] = None

class UserResponse(BaseModel):
    id: int
    name: str
    description: Optional[str] = None
    created_at: str

@router.get("/", response_model=List[UserResponse])
async def get_users():
    """Get all users"""
    # Implementation here
    return []

@router.post("/", response_model=UserResponse)
async def create_user(data: UserCreate):
    """Create new user"""
    # Implementation here
    return UserResponse(id=1, **data.dict(), created_at="2023-01-01T00:00:00")

@router.get("/{{id}}", response_model=UserResponse)
async def get_user(id: int):
    """Get user by ID"""
    # Implementation here
    raise HTTPException(status_code=404, detail="User not found")
