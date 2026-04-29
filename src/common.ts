import pg from "pg";
import * as Minio from "minio";

const { Pool } = pg;

// ── PG 连接 ──
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error("Environment variable DATABASE_URL is required");
}
export const pool = new Pool({ connectionString: DATABASE_URL });

// ── MinIO 连接 ──
const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT ?? "127.0.0.1";
const MINIO_PORT = parseInt(process.env.MINIO_PORT ?? "9000", 10);
const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY;
const MINIO_SECRET_KEY = process.env.MINIO_SECRET_KEY;
if (!MINIO_ACCESS_KEY || !MINIO_SECRET_KEY) {
  throw new Error("Environment variables MINIO_ACCESS_KEY and MINIO_SECRET_KEY are required");
}

export const minioClient = new Minio.Client({
  endPoint: MINIO_ENDPOINT,
  port: MINIO_PORT,
  useSSL: process.env.MINIO_USE_SSL === "true",
  accessKey: MINIO_ACCESS_KEY,
  secretKey: MINIO_SECRET_KEY,
  region: process.env.MINIO_REGION ?? "us-east-1",
});
export const MINIO_BUCKET = process.env.MINIO_BUCKET ?? "knowledgemap";
