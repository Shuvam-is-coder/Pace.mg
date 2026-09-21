import type { Request, Response, NextFunction } from "express"
import { AppError } from "../error/appError.js";

const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => { 
    if (err instanceof AppError) { 
        res.status(err.statusCode).json({
            success: false,
            error: {
                code: err.code,
                message: err.message,
                ...(err.details !== undefined && {
                    details: err.details
                })
            }
        })
    }

    console.error(err)

    res.status(500).json({
        success: false,
        error: {
            code: "INTERNAL_SERVER_ERROR",
            message: "Something went wrong... Please try again."
        }
    })
}

export default errorHandler