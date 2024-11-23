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
    subject: "Newsletter Subscription",
    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2 style="color: #0076A8; background-color: #B3E0F0; text-align: center;">New Newsletter Subscription</h2>
      <p style="font-size: 16px; color: #222;"><strong>Email:</strong> ${email}</p>
    </div>`
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