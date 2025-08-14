import nodemailer from 'nodemailer';

// Create transporter - multiple options
const createTransporter = () => {
  // Option 1: Use SMTP2GO (free tier available)
  if (process.env.SMTP2GO_API_KEY) {
    return nodemailer.createTransport({
      host: 'mail.smtp2go.com',
      port: 2525,
      auth: {
        user: process.env.SMTP2GO_USERNAME,
        pass: process.env.SMTP2GO_API_KEY
      }
    });
  }
  
  // Option 2: Use SendGrid (free tier available)
  if (process.env.SENDGRID_API_KEY) {
    return nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
      }
    });
  }
  
  // Option 3: Use Gmail with less secure apps (not recommended but works)
  if (process.env.GMAIL_USER && process.env.GMAIL_PASSWORD) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
      }
    });
  }
  
  // Fallback: Just log to console if no email service configured
  return null;
};

export const sendContactNotification = async (contactData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) => {
  try {
    const transporter = createTransporter();
    
    // If no email service configured, just log the message
    if (!transporter) {
      console.log('='.repeat(50));
      console.log('НОВО ЗАПИТВАНЕ ОТ УЕБСАЙТА:');
      console.log('='.repeat(50));
      console.log(`Име: ${contactData.name}`);
      console.log(`Имейл: ${contactData.email}`);
      console.log(`Телефон: ${contactData.phone}`);
      console.log(`Услуга: ${contactData.service}`);
      console.log(`Съобщение: ${contactData.message}`);
      console.log('='.repeat(50));
      console.log('ЗА ИЗПРАЩАНЕ НА ИМЕЙЛИ ДОБАВЕТЕ EMAIL НАСТРОЙКИ');
      console.log('='.repeat(50));
      return true; // Consider it successful for development
    }
    
    const mailOptions = {
      from: process.env.GMAIL_USER || process.env.SMTP2GO_USERNAME || 'noreply@rolltech.bg',
      to: 'rolltech2020@gmail.com',
      subject: `Ново запитване от ${contactData.name} - RollTech`,
      html: `
        <h2>Ново запитване от уебсайта</h2>
        <p><strong>Име:</strong> ${contactData.name}</p>
        <p><strong>Имейл:</strong> ${contactData.email}</p>
        <p><strong>Телефон:</strong> ${contactData.phone}</p>
        <p><strong>Услуга:</strong> ${contactData.service}</p>
        <p><strong>Съобщение:</strong></p>
        <p>${contactData.message}</p>
        <hr>
        <p><small>Изпратено от RollTech уебсайт</small></p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to rolltech2020@gmail.com');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    // Still log the contact request for development
    console.log('='.repeat(50));
    console.log('НОВО ЗАПИТВАНЕ (EMAIL НЕУСПЕШЕН):');
    console.log('='.repeat(50));
    console.log(`Име: ${contactData.name}`);
    console.log(`Имейл: ${contactData.email}`);
    console.log(`Телефон: ${contactData.phone}`);
    console.log(`Услуга: ${contactData.service}`);
    console.log(`Съобщение: ${contactData.message}`);
    console.log('='.repeat(50));
    return false;
  }
};