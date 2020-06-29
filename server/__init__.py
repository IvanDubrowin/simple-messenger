from fastapi import FastAPI

from server.endpoints import base
from server.settings import Settings

settings = Settings()

app = FastAPI(debug=settings.debug)
app.include_router(base.router)
