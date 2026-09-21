import mongoose from "mongoose";
import env from "../config/env.js";

export function connectToDatabase() {
  mongoose
    .connect(env.mongo_uri)
    .then(() => {
      console.log("Connected to database");
    })
    .catch(() => {
      console.log("failed");
    });
}
