import express from "express";
import morgan from "morgan";
import authRouter from "./modules/auth/auth.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/auth", authRouter);

app.get("/health", (req, res) => {
  res.send("I am good");
});

app.use(errorHandler)

export default app;
