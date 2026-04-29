// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to admin (you)
    const adminMailOptions = {
      from: `"iCreatixPRO Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      subject: `New Contact Form: ${service || "General Inquiry"} from ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2C727B, #1A394E); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2C727B; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
            .badge { display: inline-block; background: #2C727B; color: white; padding: 5px 10px; border-radius: 5px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📬 New Contact Form Submission</h2>
              <p>iCreatixPRO Lead Notification</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">📞 Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              ${service ? `
              <div class="field">
                <div class="label">🎯 Service:</div>
                <div class="value"><span class="badge">${service}</span></div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <hr style="margin: 20px 0;">
              <p style="font-size: 14px; color: #666;">
                <strong>Quick Actions:</strong><br>
                • Reply to this email to respond to ${name}<br>
                • Call: ${phone || "Not provided"}<br>
                • Submitted: ${new Date().toLocaleString()}
              </p>
            </div>
            <div class="footer">
              <p>iCreatixPRO - Digital Marketing Agency</p>
              <p>© ${new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Auto-reply to user
    const userMailOptions = {
      from: `"iCreatixPRO Team" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting iCreatixPRO",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2C727B, #1A394E); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #2C727B; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>✨ Thanks for reaching out, ${name}!</h2>
            </div>
            <div class="content">
              <p>We've received your message and our team will get back to you within <strong>24 hours</strong>.</p>
              
              <h3>📋 Here's what you sent us:</h3>
              <p><strong>Service Interest:</strong> ${service || "General Inquiry"}</p>
              <p><strong>Message:</strong> "${message.substring(0, 100)}${message.length > 100 ? '...' : ''}"</p>
              
              <div style="background: #e8f4f4; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #2C727B;">
                  💡 <strong>Quick Tip:</strong> While you wait, check out our <a href="https://icreatixpro.com/blogs" style="color: #2C727B;">blog</a> for expert SEO and marketing insights!
                </p>
              </div>
              
              <a href="https://icreatixpro.com" class="button">Visit Our Website</a>
              
              <p style="margin-top: 20px; font-size: 14px;">
                Best regards,<br>
                <strong>The iCreatixPRO Team</strong>
              </p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} iCreatixPRO. All rights reserved.</p>
              <p>123 Business Avenue, New York, NY 10001</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}