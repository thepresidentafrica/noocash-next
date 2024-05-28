import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 7870,
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS?.split(",") || ["http://localhost:6033"],
};
