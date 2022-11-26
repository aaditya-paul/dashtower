const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(
  "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"
);

export default (req, res) => {
  const body = JSON.parse(req.body);
  const m = `
    This user has requested a free audit

    Name:${body.name}\r\n
    Buisness Name:${body.buisnessName}\r\n
    Email:${body.email}\r\n
    Message:${body.message}
  `;
  const msg = {
    to: "hello@dashtower.com", // Change to your recipient
    from: "aadityapaul2006@gmail.com", // Change to your verified sender
    subject: "Notification",
    text: "lorem impsum",
    html: m.replace(/\r\n/g, "<br>"),
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });

  console.log(body);
  res.status(200).json({ status: "ok" });
};
