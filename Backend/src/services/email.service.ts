import nodemailer from 'nodemailer'
import env from '../config/env.js'

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: env.google_smtp_user,
        clientId: env.google_client_id,
        clientSecret: env.google_client_secret,
        refreshToken: env.google_refresh_token
    }
})

try {
    await transporter.verify();
    console.log("Server is ready to send Emails.")
} catch (err) { 
    console.log("Email Transporter Failed To Connect.")
}

type emailInput = {
    to: string,
    subject: string,
    html: string
}

export const sendVerificationEmail = async ({ to, subject, html }: emailInput) => {

    const mailOptions = {
        from: env.google_smtp_user,
        to,
        subject,
        html
    }

    const details = await transporter.sendMail(mailOptions)

    console.log("Email Sent: ", details)
}