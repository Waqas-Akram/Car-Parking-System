const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

//Post email message with the help of nodemailer transport

router.post("/send", async (req, res) => {
  let { name, subject, email, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "Outlook",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: process.env.RECIEVER_EMAIL_ADDRESS,
      subject: subject + "(Car Parking Alert)",
      text: "",
      html:
        "<p><ul><li>Name :" +
        name +
        "</li><li>Email : " +
        email +
        "</li><li>Message : " +
        message +
        "</li></ul> </p>",
    };
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      res.status(200).json({ msg: "Message Sent Successfully" });
    });
  } catch (error) {
    console.error(erro.message);
    res.status(500).json({ msg: "Message Error" });
  }
});

module.exports = router;
