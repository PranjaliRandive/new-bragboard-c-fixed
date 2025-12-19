from sqlalchemy import Column, Integer, String
from app.core.database import Base, engine
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(String, default="employee")  # employee/admin
    leaderboard = relationship("Leaderboard", back_populates="user", uselist=False)