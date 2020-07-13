from fastapi_users.db import TortoiseBaseUserModel
from tortoise import fields


class User(TortoiseBaseUserModel):
    id = fields.UUIDField(pk=True, index=True)
    username = fields.CharField(max_length=255)
    created_at = fields.DatetimeField(auto_now_add=True)
    modified_at = fields.DatetimeField(auto_now=True)

    def __str__(self) -> str:
        return f'Пользователь {self.username}'
