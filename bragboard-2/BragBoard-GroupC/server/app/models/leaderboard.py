from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from app.core.database import Base

class Leaderboard(Base):
    __tablename__ = "leaderboard"

    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), primary_key=True)
    points = Column(Integer, nullable=False, default=0)
    
    user = relationship("User", back_populates="leaderboard")
