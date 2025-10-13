# Quick Start — NestJS + PostgreSQL Docker Setup

## Prerequisites

- Docker (≥ 20.x)
- Docker Compose (≥ v2.x)
- `.env` file in project root
- Ports `3000`, `3002` and `5432` open
- talk-to is mapped -> host `3000:3000`
- visionBuilder is mapped -> host `3002:3000`

---

## 1 Clone Repository

```bash
git clone <repository-url>
cd <project-folder>
```

## 2 Create .env

- Place `.env` in the talk-to root folder
- Place `.env` in the visionBuilder root folder
- talk-to database url: DATABASE_URL="postgresql://admin:sR123456@db:5432/mydb"
- visionBuilder database url: DATABASE_URL="postgresql://admin:sR123456@db:5432/visiondb"

## Build & Start Containers

```bash
docker compose up --build -d
```

- To check if a container is running:

```bash
docker ps
```

# talk-to-backend
