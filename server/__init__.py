from fastapi import FastAPI
from fastapi.responses import UJSONResponse
from fastapi.staticfiles import StaticFiles
from tortoise.contrib.fastapi import register_tortoise

from server.middleware import middleware
from server.routes import setup_routes
from server.settings import settings

app = FastAPI(
    title=settings.title,
    debug=settings.debug,
    middleware=middleware,
    default_response_class=UJSONResponse
)
register_tortoise(
    app,
    db_url=settings.db_url,
    modules={"models": ["server.models"]},
    generate_schemas=True,
    add_exception_handlers=True,
)
setup_routes(app)

if settings.debug:
    app.mount(
        "/static",
        StaticFiles(directory=settings.static_root),
        name="static"
    )
