import { body, validationResult } from "express-validator";
import type { Request, Response, NextFunction } from "express";
import { AppError } from "../error/appError.js";

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new AppError(
      "Validation failed",
      400,
      "VALIDATION_ERROR",
      errors.array().map((e) => { 
        return {field: e.type === "field" ? e.path : "unknown", message: e.msg}
      }),
    ))
  }
  next();
};

export const registerValidation = [
  body("username")
    .trim()
    .isString()
    .withMessage("username must be string")
    .bail()
    .isLength({ min: 2, max: 40 })
    .withMessage("username must be between 2 and 40 characters"),
  body("email").trim().isEmail().withMessage("email must be valid"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("password must be valid")
    .bail()
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters")
    .bail()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?]{6,}$/,
    )
    .withMessage(
      "password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
  validate,
];
