from fastapi import FastAPI
from fastapi.responses import UJSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi_users import FastAPIUsers
from fastapi_users.authentication import JWTAuthentication
from fastapi_users.db import TortoiseUserDatabase
from tortoise.contrib.fastapi import register_tortoise

from server.endpoints import base
from server.models import User
from server.serializers.users import UserCreateSerializer, UserDBSerializer, UserSerializer, UserUpdateSerializer
from server.settings import Settings

settings = Settings()

jwt_authentication = JWTAuthentication(
    secret=settings.secret_key,
    lifetime_seconds=settings.jwt_lifetime,
    tokenUrl='/auth/jwt/login'
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

app = FastAPI(
    title=settings.title,
    debug=settings.debug,
    default_response_class=UJSONResponse
)
register_tortoise(
    app,
    db_url=settings.db_url,
    modules={"models": ["server.models"]},
    generate_schemas=True,
    add_exception_handlers=True,
)
app.include_router(
    fastapi_users.get_auth_router(jwt_authentication),
    prefix='/auth/jwt',
    tags=["auth"]
)
app.include_router(
    fastapi_users.get_register_router(),
    prefix="/auth",
    tags=["auth"]
)
app.include_router(
    fastapi_users.get_reset_password_router(settings.secret_key),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_users_router(),
    prefix="/users",
    tags=["users"]
)
app.include_router(base.router)


if settings.debug:
    app.mount(
        "/static",
        StaticFiles(directory=settings.static_root),
        name="static"
    )
