import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1000);
  };
  return <section id="contact" className="py-16 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll do my best to get back to you!
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MailIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Email
                  </h3>
                  <a href="mailto:alex.chen@example.com" className="text-blue-600 hover:underline">
                    alex.chen@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <PhoneIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPinIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600">Stanford, California</p>
                </div>
              </div>
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-2 rounded-full hover:bg-blue-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-2 rounded-full hover:bg-blue-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-2 rounded-full hover:bg-blue-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg">
              {submitMessage && <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                  {submitMessage}
                </div>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your email" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Subject" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message"></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className={`flex items-center justify-center w-full py-3 px-6 rounded-md text-white font-medium ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} transition-colors`}>
                {isSubmitting ? 'Sending...' : <>
                    <span>Send Message</span>
                    <SendIcon size={18} className="ml-2" />
                  </>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};