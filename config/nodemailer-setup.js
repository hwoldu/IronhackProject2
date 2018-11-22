const nodemailer = require("nodemail");

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
      user: process.env.gmail_email,
      pass: process.env.gmail_password,
  },
});


function sendSignupMail (userDoc) {
  const { fullName, email } = userDoc;
  // this const will now replace generic info and we must use grave accents to make sure ${fullname etc} works
 // return the promise of the email sending for the router to .then() & .catch()
 return transport.sendMail({
   from: "Nigerian Prince Obi <Prince@kingdomofwakanda.com",
   to: `${fullName}, <${email}>`,
   subject: "We Need Your Support",
   text: `Greetings, ${fullName} Please send us your bank information to support a child in need.`,
   html: `
   <h1 style="color: orange;"> Hi, ${fullName} </h1>
    <p style="font-style: italic"> Thanks for joining Express Users.</p>
   `,

 });
   
}
// another example of just an email. every email has diff content and just call it from the router. make sure u call it in module exports
function sendPasswordEmail () {
  return transport.sendMail ({
    from: "Express Users <express.users@example.com>",
    to: "blah@email.com",
    subject: "Don't forget your password!",
    text: "Don't be a dummy",
    html: "<h1> Don't be dumb... </h1>"
  });
}

modeule.exports = { sendSignupMail, sendPasswordEmail };
