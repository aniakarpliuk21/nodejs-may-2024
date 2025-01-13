"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
exports.config = {
    port: process.env.PORT || 3000,
    mongoUrl: process.env.MONGO_DB_URL || "mongodb://localhost:27017/express-mongo",
};
