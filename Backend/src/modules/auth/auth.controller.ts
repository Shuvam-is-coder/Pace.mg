import type { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import env from '../../config/env.js'
import { AppError } from "../../error/appError.js";
import userModel from "../../models/user.model.js";
import { sendVerificationEmail } from "../../services/email.service.js";


export const registerController = async (req: Request, res: Response, next: NextFunction) => { 
    try { 
        const { email, username, password } = req.body

        const userAlreadyExists = await userModel.findOne({
            $or: [{ username }, { email }]
        })

        if (userAlreadyExists) {
            throw new AppError("User already Exists.", 409, "USER_ALREADY_EXISTS")
        }

        const user = await userModel.create({
            username, email, password
        })

        const emailVerificationToken = jwt.sign({
            email: user.email,
            id: user._id
        }, env.jwt_secret,
        {
            expiresIn: "3600s"
        })

        sendVerificationEmail({
            to: email,
            subject: "Welcome to Pace.mg",
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>Verify your Pace.mg email</title>
                </head>

                <body style="
                  margin: 0;
                  padding: 0;
                  background-color: #f5f5f5;
                  font-family: Arial, Helvetica, sans-serif;
                  color: #171717;
                ">
                  <div style="
                    max-width: 520px;
                    margin: 40px auto;
                    padding: 32px 24px;
                  ">

                    <div style="
                      background: #ffffff;
                      border: 1px solid #e5e5e5;
                      border-radius: 12px;
                      padding: 32px;
                    ">

                      <h1 style="
                        margin: 0 0 24px;
                        font-size: 24px;
                        font-weight: 700;
                        letter-spacing: -0.5px;
                      ">
                        Pace.mg
                      </h1>

                      <h2 style="
                        margin: 0 0 12px;
                        font-size: 20px;
                        font-weight: 600;
                      ">
                        Verify your email
                      </h2>

                      <p style="
                        margin: 0 0 24px;
                        font-size: 15px;
                        line-height: 1.6;
                        color: #525252;
                      ">
                        Thanks for creating your Pace.mg account. 
                        Please verify your email address to continue.
                      </p>

                      <a
                        href="http://localhost:5000/api/v1/auth/verify-email/?token=${emailVerificationToken}"
                        style="
                          display: inline-block;
                          padding: 12px 20px;
                          background: #171717;
                          color: #ffffff;
                          text-decoration: none;
                          border-radius: 8px;
                          font-size: 14px;
                          font-weight: 600;
                        "
                      >
                        Verify email
                      </a>

                      <p style="
                        margin: 24px 0 0;
                        font-size: 13px;
                        line-height: 1.5;
                        color: #737373;
                      ">
                        This verification link will expire soon. If you didn't create a
                        Pace.mg account, you can safely ignore this email.
                      </p>

                    </div>

                    <p style="
                      margin: 20px 0 0;
                      text-align: center;
                      font-size: 12px;
                      color: #a3a3a3;
                    ">
                      © Pace.mg
                    </p>

                  </div>
                </body>
                </html>
            `
        })

        res.status(201).json({
            success: true,
            message: "User registered Successfully!",
            details: {
                _id: user._id,
                username: user.username,
                email: user.email,
            }
        })

    } catch (err) { 
        return next(err)
    }
}

type EmailVerificationPayload = {
    email: string,
    id: string
}

export const verifyEmailController = async (req: Request, res: Response, next: NextFunction) => { 
    const { token } = req.query

    if (!token) { 
        throw new AppError("Token not Found", 404, "UNAUTHORIZED")
    }

    if (typeof token !== "string") {
      throw new AppError(
        "Invalid verification token",
        400,
        "VALIDATION_ERROR",
      );
    }

    try {
        const decoded = jwt.verify(token, env.jwt_secret) as unknown as EmailVerificationPayload

        const user = await userModel.findOne({ email: decoded.email })

        if(!user) {
            throw new AppError("user not found", 404, "USER_NOT_FOUND")
        }

        user.verified = true

        await user.save()

        return res.redirect(
            `${env.frontend_url}/email-verified`
        )
    } catch (err) { 
        next(err)
    }
}