import dotenv from "dotenv";

dotenv.config();

export const configure = {
  port: process.env.PORT || 3000,
  frontUrl: process.env.FRONT_URL || "http://localhost:3000",
  mongoUrl:
    process.env.MONGO_DB_URL || "mongodb://localhost:27017/express-mongo",
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
  jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  smtpPassword: process.env.SMTP_PASSWORD,
  smtpEmail: process.env.SMPT_EMAIL,
  actionForgotPasswordSecret: process.env.ACTION_FORGOT_PASSWORD_SECRET,
  actionForgotPasswordExpiresIn: process.env.ACTION_FORGOT_PASSWORD_EXPIRES_IN,
  actionEmailVerificationSecret: process.env.ACTION_EMAIL_VERIFICATION_SECRET,
  actionEmailVerificationExpiresIn:
    process.env.ACTION_EMAIL_VERIFICATION_EXPIRES_IN,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
  AWS_REGION: process.env.AWS_REGION,
  AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,
  AWS_S3_ENDPOINT: process.env.AWS_S3_ENDPOINT,
};
