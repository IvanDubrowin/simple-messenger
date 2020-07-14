from fastapi import FastAPI

from server.auth import fastapi_users, jwt_authentication
from server.endpoints import base
from server.settings import settings


def setup_routes(app: FastAPI) -> None:
    app.include_router(
        fastapi_users.get_auth_router(jwt_authentication),
        prefix='/api/auth/jwt',
        tags=["auth"]
    )
    app.include_router(
        fastapi_users.get_register_router(),
        prefix="/api/auth",
        tags=["auth"]
    )
    app.include_router(
        fastapi_users.get_reset_password_router(settings.secret_key),
        prefix="/api/auth",
        tags=["auth"],
    )
    app.include_router(
        fastapi_users.get_users_router(),
        prefix="/api/users",
        tags=["users"]
    )
    app.include_router(base.router)
