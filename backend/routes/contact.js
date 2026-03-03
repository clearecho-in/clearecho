const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const msg = {
      to: process.env.FROM_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: `New Message from ${name}`,
      html: `
            <h3>New Contact Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
            `,
    };
    await sgMail.send(msg);

    res.status(200).json({
      sucess: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Email failed" });
  }
});

module.exports = router;