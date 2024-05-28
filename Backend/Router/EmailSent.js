const express = require("express");
const Router = express.Router();
require("dotenv").config()
const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 465,
  secure: true,
  auth: {
    user:process.env.MAIL_USER ,
    pass: process.env.MAIL_PASSWORD,
  },
});
Router.post("/email", (req, res) => {
  res.send("ServerMail");
  const cources = req.body;
  var mailOptions = {
    from:process.env.MAIL_USER,
    to:cources.data.ParentEmail,
    subject:`Invitation to Join Our Workshop on  ${cources.data.CourseName}-Earn Your Certification!`,
    html: `<h1 style="font-size: 32px; font-weight: bold;"><span style="font-size: medium;">
    <span style="font-weight: 400;">&nbsp; Dear ${cources.data.ParentName}&nbsp;</span></span></h1><p 
    style="text-align: left;"> We are excited to invite you to our upcoming webinar on
     ${cources.data.CourseName},&nbsp;scheduled for&nbsp;${cources.cources.Time}.&nbsp;
     </p><p style="text-align: left;">&nbsp; Key details:<br>&nbsp; &nbsp; 
     &nbsp;- Date: ${cources.cources.Time}</p><p style="text-align: 
     left;">&nbsp; &nbsp; - Platform: <a href="https://us06web.zoom.us/j/7776922865"> https://us06web.zoom.us/j/7776922865</a></p><p style="text-align: left;">&nbsp;
      &nbsp; - Meeting ID: 777 692 2865</p><p style="text-align: left;">
      As a bonus, all participants will receive a free certification upon completion of 
      the workshop.<br>We look forward to your participation!</p><p style="text-align: left;">
      &nbsp; &nbsp; &nbsp; Best regards, &nbsp;<br>&nbsp; &nbsp; &nbsp; World&rsquo;o&rsquo;tutor</p>`,
  };
  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
});
module.exports = Router;
