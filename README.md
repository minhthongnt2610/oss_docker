# Dockerized Fullstack Application

## Giới thiệu
Dự án này là một ứng dụng **fullstack** được docker hóa, bao gồm:

- **Frontend**: Web frontend (HTML/React) chạy trong container
- **Backend**: Backend API (NodeJS hoặc PHP) chạy trong container
- **Database**: MySQL 8 chạy trong container
- **Docker Compose**: Dùng để quản lý và khởi chạy toàn bộ hệ thống

Mục tiêu của project là **chuẩn hóa môi trường**, giúp dev khác có thể chạy ứng dụng chỉ với **1 lệnh Docker**, không cần cài thủ công NodeJS, PHP hay MySQL.

---

## Công nghệ sử dụng
- Docker & Docker Compose
- MySQL 8
- Backend: NodeJS / PHP
- Frontend: Web frontend
- Hệ điều hành: Linux (Docker container)

---

## Cấu trúc thư mục

```text
.
├── backend/            # Source backend + Dockerfile
├── frontend/           # Source frontend + Dockerfile
├── docker-compose.yml  # File orchestration Docker
├── .env.example        # File cấu hình mẫu
└── README.md

## Cách clone về cho dev
```bash
git clone https://github.com/minhthongnt2610/oss_docker.git
docker compose up --build