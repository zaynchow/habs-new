const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);
export async function GET(request) {
  return new Response("hi");
}

export async function POST(request) {
  const body = await request.json();
  const message = `
  Name: ${body.fName}\r\n
  Phone Number: ${body.phNum}\r\n
  Email: ${body.email}\r\n
  Account Number: ${body.accNum}\r\n
  Message: ${body.message}\r\n
  `;
  const data = {
    to: "information@habsecurities.com",
    from: "web@habsecurities.com",
    subject: "New Contact Form Message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail
    .send(data)
    .then((response) => {
      console.log("Success", response);
      return new Response("Success", {
        status: 200,
      });
    })
    .catch((error) => {
      console.log("error", error);
      return new Response("Error", {
        status: 503,
      });
    });
  return new Response("Success", {
    status: 200,
  });
}
