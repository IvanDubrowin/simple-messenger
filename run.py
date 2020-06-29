import uvicorn

from server import settings


if __name__ == '__main__':
    uvicorn.run('server:app', reload=settings.reload, loop='uvloop')
