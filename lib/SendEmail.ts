// lib/emailjs.ts
import emailjs from 'emailjs-com';

export const SendEmail = async (formData: { name: string, email: string, message: string }) => {
  try {
    const response = await emailjs.send(
      'service_f0s2jrd', // Your EmailJS Service ID
      'template_v24v6ib', // Your Template ID
      {
        to_name: 'Your Name', // Replace with the name you want in the email
        from_name: formData.name, // Name from the form
        message: formData.message, // Message from the form
        reply_to: formData.email, // Email from the form
      },
      'jmmOlFZ3_E1n0JyTt' // Your User ID
    );
    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
