import { NextResponse } from 'next/server';
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

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

    try {
      // Send email using Resend
      const data = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>', // You can change this after verifying your domain
        to: 'mantomarchi300@outlook.com',
        replyTo: email,
        subject: `Contact Form: ${subject}`,
        html: `
          <div>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        `,
      });
      
      console.log('Email sent successfully:', data);
      
      // Return success response
      return NextResponse.json(
        { success: true, message: 'Email sent successfully' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
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