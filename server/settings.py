import os

from pydantic import BaseSettings


class Settings(BaseSettings):
    title: str = 'Simple messenger'
    debug: bool = True

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
