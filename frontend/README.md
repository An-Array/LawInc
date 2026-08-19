# LawInc Frontend

Single Next.js application for LawInc’s public interface and administrative interface.

## Local development

From the `frontend` directory:

```bash
npm run dev
```

### Open

- [http://localhost:3000] (http://localhost:3000)
- [http://localhost:3000/admin] (http://localhost:3000/admin)

### Quality Checks

```bash
npm run lint
npm run build
```

## Backend connection

The public home page reads the backend health contract server-side.

For local development, the default backend URL is:

```bash
http://127.0.0.1:8000
```

To override it, copy ```.env.example``` to ```.env.local``` and set ```BACKEND_API_BASE_URL```.
