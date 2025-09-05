import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactData } from '../data/contact';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', message: '', contactType: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<any>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Replace with actual form submission
      console.log('Form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '', contactType: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {contactData.header.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {contactData.header.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">{contactData.contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg mr-4">
                    <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a 
                      href={`mailto:${contactData.contactInfo.email}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {contactData.contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mr-4">
                    <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a 
                      href={`tel:${contactData.contactInfo.phone}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {contactData.contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {contactData.contactInfo.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {social.name === 'LinkedIn' && <Linkedin className="w-5 h-5" />}
                      {social.name === 'GitHub' && <Github className="w-5 h-5" />}
                      {social.name === 'Twitter' && <Twitter className="w-5 h-5" />}
                      {social.name === 'Instagram' && <Instagram className="w-5 h-5" />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
              
              {status === 'success' ? (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
                  {contactData.form.successMessage}
                </div>
              ) : status === 'error' ? (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg">
                  {contactData.form.errorMessage}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      How can I help you? *
                    </label>
                    <select
                      id="contactType"
                      name="contactType"
                      value={formData.contactType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select an option</option>
                      {contactData.form.fields
                        .find(field => field.name === 'contactType')
                        ?.options?.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 transition-colors"
                  >
                    {status === 'sending' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {contactData.form.submitText}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
