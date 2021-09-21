const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");
const creds = require("./config");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3005);

const transport = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  const name = req.body.name;
  const contact = req.body.contact;
  const message = req.body.message;
  const content = `name: ${name} \n contact: ${contact} \n message: ${message} `;

  const mail = {
    from: name,
    to: "jadekirkham@gmail.com",
    subject: "New Message from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });

      // transporter.sendMail(
      //   {
      //     from: "<your email address>",
      //     to: contact,
      //     subject: "Submission was successful",
      //     text: `Thank you for contacting us!\n\nForm details\nName: ${name}\nEmail: ${contact}\nMessage: ${message}`,
      //   },
      //   function (error, info) {
      //     if (error) {
      //       console.log(error);
      //     } else {
      //       console.log("Message sent: " + info.response);
      //     }
      //   }
      // );
    }
  });
});
