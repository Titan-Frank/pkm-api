# REST API Server

知识库 REST API 服务，提供知识文档与附件的 HTTP 接口。

## 接口

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/knowledge?user_id=0` | 获取用户知识文档列表 |
| GET | `/knowledge/:id` | 获取单个知识文档详情 |
| GET | `/attachments?user_id=0` | 获取用户附件列表 |
| GET | `/attachment/:id` | 下载附件文件 |

## 环境变量

复制 `.env.example` 为 `.env` 并填写：

| 变量 | 说明 |
|------|------|
| `DATABASE_URL` | PostgreSQL 连接字符串 |
| `MINIO_ENDPOINT` | MinIO 地址 |
| `MINIO_PORT` | MinIO 端口 |
| `MINIO_ACCESS_KEY` | MinIO 访问密钥 |
| `MINIO_SECRET_KEY` | MinIO 秘密密钥 |
| `MINIO_BUCKET` | MinIO Bucket 名称 |
| `API_PORT` | REST API 服务端口，默认 3001 |

## 安装与运行

```bash
cd rest-api
npm install
cp .env.example .env
# 编辑 .env 填写配置
npm run build
npm start
```

## 开发模式

```bash
npx tsx src/api.ts
```
