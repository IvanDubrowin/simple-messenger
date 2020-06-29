from pydantic import BaseSettings


class Settings(BaseSettings):
    debug: bool = True

    @property
    def reload(self) -> bool:
        if self.debug:
            return True
        return False
