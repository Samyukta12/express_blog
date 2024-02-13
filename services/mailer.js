const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});
const mailer = async (email) => {
  const info = await transporter.sendMail({
    from: '"Sujata Joshi" <sujatajoc123@gmail.com>',
    to: email,
    subject: "Registration Successful",
    html: "<b>Thank you for joining with us.</b>",
  });

  return info.messageId;
};

module.exports = { mailer };
