function EmailHaha() {
  const Mail = require("@sendgrid/mail");
  Mail.setApiKey(
    "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"
  );

  const msg = {
    to: "aadityapaul2006.programmer@gmail.com", // Change to your recipient
    from: "aadityapaul2006@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  Mail.send(msg)
    .then((response) => {
      console.log("ok");
    })
    .catch((e) => {
      console.log(e);
    });
}
EmailHaha();
module.exports = { EmailHaha };
