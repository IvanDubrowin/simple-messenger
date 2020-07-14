import os

from pydantic import BaseSettings


class Settings(BaseSettings):
    title: str = 'Simple messenger'
    debug: bool = True
    secret_key: str = 'secret'
    jwt_lifetime: int = 3600
    db_url: str = 'sqlite://:memory:'

    @property
    def reload(self) -> bool:
        if self.debug:
            return True
        return False

    @property
    def base_dir(self) -> str:
        return os.path.dirname(os.path.abspath(__file__))

    @property
    def static_root(self) -> str:
        return os.path.join(self.base_dir, 'static')


settings = Settings()
