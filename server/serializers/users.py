from fastapi_users import models
from pydantic import Field


class UserSerializer(models.BaseUser):
    username: str = Field(None, min_length=1, max_length=255)


class UserCreateSerializer(models.BaseUserCreate):
    username: str = Field(None, min_length=1, max_length=255)


class UserUpdateSerializer(UserSerializer, models.BaseUserUpdate):
    pass


class UserDBSerializer(UserSerializer, models.BaseUserDB):
    pass
