# LawInc API contracts

This document records stable boundaries between LawInc applications and contributors.

## Local backend base URL

```bash

http://127.0.0.1:8000

```

Production deployments must provide the frontend with the backend URL through configuration.

## ``` GET /health ```

Purpose: confirm that the backend process is running and can load its configuration.

Response: ``` 200 OK ```

```bash
  {
  "status": "ok",
  "service": "LawInc API",
  "version": "0.1.0",
  "environment": "development"
}
```

This endpoint does not report database, retrieval, citation, or LLM availability.

### Future domain APIs

Legal-search, source, citation, administrative, and AI endpoints will be added only when their owning tracks define their domain contracts. Those APIs will use a versioned ```/api/v1/``` route prefix.
