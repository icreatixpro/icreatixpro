import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, budget, message } = await req.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Email content
    const emailBody = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 CONTACT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:        ${name}
Email:       ${email}
Phone:       ${phone || "Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 SERVICE INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service:     ${service || "Not specified"}
Budget:      ${budget || "Not specified"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 Submitted: ${new Date().toLocaleString()}
🌐 From: iCreatixPRO Website Contact Form
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;

    // HTML version for better formatting
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2C727B, #1A394E); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { padding: 20px; background: #f9f9f9; border: 1px solid #ddd; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1A394E; }
          .message { background: white; padding: 15px; border-left: 4px solid #2C727B; margin-top: 15px; border-radius: 5px; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>✨ New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">📝 Name:</div>
              <div>${name}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email:</div>
              <div><a href="mailto:${email}">${email}</a></div>
            </div>
            ${phone ? `<div class="field"><div class="label">📞 Phone:</div><div>${phone}</div></div>` : ''}
            ${service ? `<div class="field"><div class="label">🎯 Service:</div><div>${service}</div></div>` : ''}
            ${budget ? `<div class="field"><div class="label">💰 Budget:</div><div>${budget}</div></div>` : ''}
            <div class="message">
              <div class="label">💬 Message:</div>
              <div style="margin-top: 10px;">${message.replace(/\n/g, '<br/>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>Submitted on: ${new Date().toLocaleString()}</p>
            <p>© iCreatixPRO Digital Marketing Agency</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // ✅ REAL EMAIL SENDING - Works on both development and production
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "icreatixpro@gmail.com",
      subject: `New Contact: ${service || "Inquiry"} from ${name}`,
      text: emailBody,
      html: htmlBody,
      replyTo: email,
    });

    console.log("✅ Email sent successfully to icreatixpro@gmail.com");
    
    return NextResponse.json({ 
      success: true, 
      message: "Your message has been received! We'll get back to you within 24 hours." 
    });
    
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again or email us directly at icreatixpro@gmail.com" },
      { status: 500 }
    );
  }
}