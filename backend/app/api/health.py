from fastapi import APIRouter, status

from app.core.config import get_settings

router = APIRouter(tags=["system"])


@router.get("/health", status_code=status.HTTP_200_OK)
async def health_check() -> dict[str, str]:
    settings = get_settings()

    return {
        "status": "ok",
        "service": settings.app_name,
        "version": settings.app_version,
        "environment": settings.environment,
    }