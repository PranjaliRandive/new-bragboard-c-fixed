from fastapi import APIRouter
from .service import get_leaderboard

router = APIRouter(
    prefix="/leaderboard",
    tags=["leaderboard"]
)

@router.get("/")
def leaderboard():
    return get_leaderboard()
