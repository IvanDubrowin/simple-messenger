from fastapi import FastAPI
from fastapi.responses import UJSONResponse
from fastapi.staticfiles import StaticFiles

from server.endpoints import base
from server.settings import Settings

settings = Settings()

app = FastAPI(
    title=settings.title,
    debug=settings.debug,
    default_response_class=UJSONResponse
)
app.include_router(base.router)

if settings.debug:
    app.mount(
        "/static",
        StaticFiles(directory=settings.static_root),
        name="static"
    )
