from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv
import enum

load_dotenv()

DATABASE_URL = "postgresql://postgres:newpassword@localhost:5432/Bragboard"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class UserRole(str, enum.Enum):
    EMPLOYEE = "employee"
    ADMIN = "admin" 
class ReportStatus(str, enum.Enum):
    PENDING = "pending"
    RESOLVED = "resolved"
    DISMISSED = "dismissed"

def get_database_session():
    db_session = SessionLocal()
    try:
        yield db_session
    finally:
        db_session.close()
