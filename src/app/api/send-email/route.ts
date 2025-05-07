import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using Outlook SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'mantomarchi300@outlook.com',
    pass: process.env.EMAIL_PASS || '', // You'll need to add your app password in .env.local
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false,
  },
});

// This is a simple email sending API using fetch to an external email service
// In a production environment, you would use a proper email service like SendGrid, Mailgun, etc.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'mantomarchi300@outlook.com',
      subject: `Contact Form: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<div>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <p><strong>Message:</strong></p>
  <p>${message.replace(/\n/g, '<br>')}</p>
</div>
      `,
      replyTo: email,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      
      // Return success response
      return NextResponse.json(
        { success: true, message: 'Email sent successfully' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please check your email server configuration.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 