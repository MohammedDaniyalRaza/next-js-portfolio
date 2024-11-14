// components/ContactForm.tsx
import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';
import { SendEmail } from '@/lib/SendEmail'; // Import the emailjs function

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await SendEmail(formData); // Send email using EmailJS
      setSuccessMessage('Message sent successfully!');
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-8" id="contact">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl shadow-lg p-10">
        <h2 className="text-3xl font-bold text-indigo-950 text-center mb-6">Get In Touch</h2>

        {/* Success/Failure Message */}
        {successMessage && <div className="text-green-600 text-center mb-4">{successMessage}</div>}
        {errorMessage && <div className="text-red-600 text-center mb-4">{errorMessage}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <span className="absolute left-4 top-5 text-indigo-900"><FaUser /></span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full pl-12 p-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-950 transition"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <span className="absolute left-4 top-5 text-indigo-900"><FaEnvelope /></span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full pl-12 p-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-950 transition"
              required
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full p-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-950 transition h-40 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 py-4 px-8 text-white bg-gray-800 rounded-full text-lg font-semibold hover:bg-gray-950 transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-900"
            disabled={isSubmitting}
          >
            <FaPaperPlane />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
