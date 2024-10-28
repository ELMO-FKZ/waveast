const nodemailer = require("nodemailer");

const sendMessage = async (req, res) => {

  const { name, email, subject, message } = req.body;

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fkharz.el.mokhtar@gmail.com",
      pass: "klem heiy honv recm"
    }
  });

  const options = {
    from: `${name} <${email}>`,
    to: process.env.EMAIL_USER,
    subject: subject,
    html: `
    <p>sender'name: ${name}</p>
    <p>sender'email: ${email}</p>
    <p>message's subject: ${subject}</p>
    <p>message:</p>
    <p>${message}</p>`
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

module.exports = {sendMessage};