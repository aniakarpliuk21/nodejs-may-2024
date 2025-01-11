import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import { configure } from "./configs/config";
import { ApiError } from "./errors/api-error";
import { authRouter } from "./routers/auth.router";
import { userRouter } from "./routers/user.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use(
  "*",
  (error: ApiError, req: Request, res: Response, next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message ?? "Something went wrong";
    res.status(status).json({ status, message });
  },
);
process.on("uncaughtException", (error: ApiError) => {
  console.error("Uncaught Exception", error);
  process.exit(1);
});
app.listen(configure.port, async () => {
  await mongoose.connect(configure.mongoUrl);
  console.log(`Server has been started on port ${configure.port}`);
});
