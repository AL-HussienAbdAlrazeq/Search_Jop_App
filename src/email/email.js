import nodemailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config()



  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${ process.env.SECRET_EMAIL}`,
      pass: `${process.env.SECRET_PASSWORD}`,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

 const  generateOTP = () => {
    return  Math.floor(100000 + Math.random() * 900000);
  }


export  const sendOTP =async (email)=>{

    const otp = generateOTP()

    const info = await transporter.sendMail({
      from: `"Node js Cycle_42" <${ process.env.SECRET_EMAIL}>`,
      to: email,
      subject: "Hello ✔",
      html: ` <p>Enter <b>${otp}</b> in the app to verify your email address and complete the signup process</p> `,
    });
  }






