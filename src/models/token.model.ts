import { model, Schema } from "mongoose";

const tokenSchema = new Schema(
  {
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);
export const Token = model("tokens", tokenSchema);
