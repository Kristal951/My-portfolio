const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "KristalDev001@gmail.com";

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    const cleanName = String(name || "").trim();
    const cleanEmail = String(email || "").trim();
    const cleanSubject = String(subject || "").trim();
    const cleanMessage = String(message || "").trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (cleanName.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Name is too long.",
      });
    }

    if (cleanSubject.length > 200) {
      return res.status(400).json({
        success: false,
        message: "Subject is too long.",
      });
    }

    if (cleanMessage.length > 5000) {
      return res.status(400).json({
        success: false,
        message: "Message is too long.",
      });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: cleanEmail,
      subject: cleanSubject || `New portfolio message from ${cleanName}`,
      text: `
        New message from your portfolio

        Name: ${cleanName}
        Email: ${cleanEmail}
        Subject: ${cleanSubject || "No subject"}

        Message:
        ${cleanMessage}
            `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Unable to send your message right now.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};
