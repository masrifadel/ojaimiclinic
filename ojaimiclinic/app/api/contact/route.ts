import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, inquiryType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    // Create transporter (using Gmail as example - you should use environment variables)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to clinic
    const clinicMailOptions = {
      from: process.env.EMAIL_USER,
      to: "masrifadel313@gmail.com", // Clinic email
      subject: `New Contact Form Submission - ${inquiryType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #feca57; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #feca57;">
              ${message}
            </p>
          </div>
          <p style="color: #666; font-size: 12px; text-align: center;">
            This message was sent from the Ojaimi Clinic contact form.
          </p>
        </div>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Ojaimi Clinic",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #feca57, #7c3aed); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">Ojaimi Clinic</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">Expert Eye Care</p>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
            <h2 style="color: #333; margin-top: 0;">Thank You for Contacting Us!</h2>
            <p style="color: #666; line-height: 1.6;">
              Dear ${name},<br><br>
              We have received your message regarding ${inquiryType}. Our team will review your inquiry and get back to you as soon as possible.
            </p>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #feca57;">
              <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
              <p style="white-space: pre-wrap; color: #666; margin: 10px 0;">${message}</p>
            </div>
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #666; margin-bottom: 20px;">Need immediate assistance?</p>
              <div style="display: flex; justify-content: center; gap: 20px;">
                <a href="tel:+96181174657" style="background: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                  Call Us
                </a>
                <a href="mailto:info@ojaimiclinic.com" style="background: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                  Email Us
                </a>
              </div>
            </div>
            <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; text-align: center;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                Ojaimi Clinic | Baabda, Mount Lebanon, Lebanon<br>
                Phone: +961 81 174 657 | Email: info@ojaimiclinic.com
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(clinicMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
