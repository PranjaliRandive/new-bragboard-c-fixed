from fastapi import APIRouter
from .leaderboard.controller import router as leaderboard_router
from .users.controller import router as users_router

api_router = APIRouter()

api_router.include_router(leaderboard_router)
api_router.include_router(users_router)
