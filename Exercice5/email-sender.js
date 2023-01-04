const nodemailer = require("nodemailer");

async function sendEmail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "youremail@gmail.com",
      pass: "yourpassword",
    },
  });

  await transporter.sendMail({
    from: "youremail@gmail.com",
    to: "myfriend@yahoo.com",
    subject: "Hello",
    text: "Hello, friend!",
  });

  console.log("Email sent!");
}

sendEmail();

//marche pas sur gmail car depuis la nouvel mise a jour google refuse les connexion exterieur essay outlook!
