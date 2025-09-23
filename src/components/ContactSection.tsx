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
  return <section id="contact" className="py-16 bg-white dark:bg-gray-800 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll do my best to get back to you!
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-pink-100 dark:bg-pink-900 p-3 rounded-full mr-4">
                  <MailIcon className="text-pink-400 dark:text-pink-300" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Email
                  </h3>
                  <a href="mailto:alex.chen@example.com" className="text-pink-400 dark:text-pink-300 hover:underline">
                    mtu@ncsu.edu
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-100 dark:bg-pink-900 p-3 rounded-full mr-4">
                  <PhoneIcon className="text-pink-400 dark:text-pink-300" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">+1 (984) 379-1936</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-100 dark:bg-pink-900 p-3 rounded-full mr-4">
                  <MapPinIcon className="text-pink-400 dark:text-pink-300" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Raleigh, North Carolina</p>
                </div>
              </div>
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/katydu" target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-2 rounded-full hover:bg-pink-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/min-ting-tu-68491b20b/" target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-2 rounded-full hover:bg-pink-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              {submitMessage && <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-md">
                  {submitMessage}
                </div>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Your email" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Subject" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Your message"></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className={`flex items-center justify-center w-full py-3 px-6 rounded-md text-white font-medium ${isSubmitting ? 'bg-pink-300 dark:bg-pink-600' : 'bg-pink-400 dark:bg-pink-500 hover:bg-pink-500 dark:hover:bg-pink-600'} transition-colors`}>
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