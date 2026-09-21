import express from "express";
import { registerValidation } from "../../validators/auth.validator.js";
import { AppError } from "../../error/appError.js";
import { registerController, verifyEmailController } from "./auth.controller.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  registerValidation,
  registerController
);

authRouter.get('/verify-email', verifyEmailController)

export default authRouter;
