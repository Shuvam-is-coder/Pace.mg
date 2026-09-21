import dotenv from "dotenv";

dotenv.config();

export const requiredEnv = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
};

const env = {
  port: process.env.port,
  environment: process.env.ENVIRONMENT,
  frontend_url: process.env.FRONTEND_URL,

  mongo_uri: requiredEnv("MONGO_URI"),
  jwt_secret: requiredEnv("JWT_SECRET"),

  google_client_id: requiredEnv("GOOGLE_CLIENT_ID"),
  google_client_secret: requiredEnv("GOOGLE_CLIENT_SECRET"),
  google_refresh_token: requiredEnv("GOOGLE_REFRESH_TOKEN"),
  google_smtp_user: requiredEnv("GOOGLE_SMTP_USER"),
};

export default env;
