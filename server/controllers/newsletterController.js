const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {

  const { email } = req.body;

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fkharz.el.mokhtar@gmail.com",
      pass: "klem heiy honv recm"
    }
  });

  const options = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "Newsletter subscription",
    html: `
    <p>sender'email: ${email}</p>
    <p>message's subject: Newsletter subscription</p>
    <p>message:</p>
    <p>I would like to be part of waveast community</p>`
  };

  // Send Email
  transporter.sendMail(options, function (error, info) {
    if (error) {
        res.status(500).json({ error: "An error occured while sending a message!"});
    } else {
        res.status(200).json("Your message has been sent successfully!");
    }
  });
};

module.exports = {sendEmail};