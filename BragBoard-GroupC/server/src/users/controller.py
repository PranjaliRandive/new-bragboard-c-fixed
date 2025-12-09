from fastapi import APIRouter

router = APIRouter(
    prefix="/users",
    tags=["users"]
)

@router.get("/")
def get_users():
    return [
        {"id": 1, "username": "Arshit"},
        {"id": 2, "username": "Vishal"}
    ]
