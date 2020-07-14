from fastapi_users import FastAPIUsers
from fastapi_users.authentication import JWTAuthentication
from fastapi_users.db import TortoiseUserDatabase

from server.models import User
from server.serializers.users import UserCreateSerializer, UserDBSerializer, UserSerializer, UserUpdateSerializer
from server.settings import settings

jwt_authentication = JWTAuthentication(
    secret=settings.secret_key,
    lifetime_seconds=settings.jwt_lifetime,
    tokenUrl='/api/auth/jwt/login'
)
user_db = TortoiseUserDatabase(UserDBSerializer, User)
fastapi_users = FastAPIUsers(
    user_db,
    [jwt_authentication],
    UserSerializer,
    UserCreateSerializer,
    UserUpdateSerializer,
    UserDBSerializer,
)
