import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { contactData } from '../data/contact';
import { trackContactForm } from '../hooks/useAnalytics';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Twitter, Instagram, AlertCircle, CheckCircle } from 'lucide-react';

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  contactType: z.string().min(1, 'Please select how we can help you'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('sending');
    setServerError('');

    try {
      // Simulate form submission - replace with actual API call
      console.log('Form submitted:', data);

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate random success/failure for testing
      if (Math.random() > 0.9) {
        throw new Error('Network error occurred');
      }

      setStatus('success');
      trackContactForm(data.contactType);
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setServerError(error instanceof Error ? error.message : 'An unexpected error occurred');
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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white ${
                        errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white ${
                        errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contactType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      How can I help you? *
                    </label>
                    <select
                      id="contactType"
                      {...register('contactType')}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white ${
                        errors.contactType ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
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
                    {errors.contactType && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.contactType.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register('message')}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white ${
                        errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 transition-colors"
                  >
                    {isSubmitting ? (
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
