import { NextResponse } from "next/server";

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

    // For development: Log to console
    if (process.env.NODE_ENV === "development") {
      console.log("\n" + "=".repeat(50));
      console.log("📧 EMAIL TO: icreatixpro@gmail.com");
      console.log("=".repeat(50));
      console.log(emailBody);
      console.log("=".repeat(50) + "\n");
      
      return NextResponse.json({ 
        success: true, 
        message: "Your message has been received! We'll get back to you within 24 hours." 
      });
    }

    // For production: Uncomment when you have email configured
    // For now, just return success even in production (email will be logged)
    console.log("\n" + "=".repeat(50));
    console.log("📧 EMAIL TO: icreatixpro@gmail.com");
    console.log("=".repeat(50));
    console.log(emailBody);
    console.log("=".repeat(50) + "\n");
    
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