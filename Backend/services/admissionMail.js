const Brevo = require("@getbrevo/brevo");

const sendFormData = async (to, data, subject = "EME Admission Form") => {
  try {
    // ------------------------------
    // 1. Generate HTML table rows
    // ------------------------------

    // Convert emails array → Brevo format
    const toArray = Array.isArray(to)
      ? to.map((email) => ({ email }))
      : [{ email: to }];

    const tableRows = Object.entries(data)
      .map(([key, value]) => {
        return `
          <tr>
            <th style="text-align:left; border:1px solid #ddd; padding:8px; background:#f0f0f0;">${key}</th>
            <td style="border:1px solid #ddd; padding:8px;">${value || "-"}</td>
          </tr>
        `;
      })
      .join("");

    // ------------------------------
    // 2. Build HTML Body
    // ------------------------------
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${subject}</title>
      </head>
      <body style="font-family:sans-serif; background:#f4f7ff; padding:20px;">
        <div style="max-width:700px; margin:auto; background:#fff; padding:20px; border-radius:8px;">
          <h2 style="color:#1f1f1f;">${subject}</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tbody>
              ${tableRows}
            </tbody>
          </table>
          <p style="margin-top:20px; font-size:12px; color:#555;">
            Submitted on: ${new Date().toLocaleString("en-GB", {
              timeZone: "Asia/Kolkata",
            })}
          </p>
        </div>
      </body>
      </html>
    `;

    // ------------------------------
    // 3. Initialize Brevo API
    // ------------------------------
    const apiInstance = new Brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      Brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    // ------------------------------
    // 4. Prepare EMAIL Payload
    // ------------------------------
    const emailPayload = {
      sender: {
        name: "Admission Team",
        email: process.env.GMAIL, // e.g. "no-reply@yourdomain.com"
      },
      to: toArray, // <---- correct format for multiple mails
      subject,
      htmlContent: htmlBody,
    };

    // ------------------------------
    // 5. Send Email
    // ------------------------------
    const response = await apiInstance.sendTransacEmail(emailPayload);

    console.log("Brevo email sent successfully:", response.messageId || response);

    return true;
  } catch (error) {
    console.error("Brevo Mail sending failed:", error);
    return false;
  }
};

module.exports = { sendFormData };
