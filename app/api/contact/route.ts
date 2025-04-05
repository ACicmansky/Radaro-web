import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Všetky polia sú povinné' },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Neplatná emailová adresa' },
        { status: 400 }
      );
    }

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.example.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || 'user@example.com',
        pass: process.env.SMTP_PASSWORD || 'password',
      },
    });
    
    // Prepare email data
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'andrej.cicmansky@gmail.com',
      subject: `Kontaktný formulár: ${subject}`,
      text: `Meno: ${name}\nEmail: ${email}\n\nSpráva:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nová správa z kontaktného formulára</h2>
          <p><strong>Meno:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Predmet:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #ef4444;">
            <p><strong>Správa:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
      replyTo: email
    };
    
    // Send email
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully to info@radaro.sk');
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json(
        { error: 'Nastala chyba pri odosielaní emailu' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Správa bola úspešne odoslaná' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Nastala chyba pri odosielaní správy' },
      { status: 500 }
    );
  }
}
