'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent successfully!'
        })
        // Clear the form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || 'Failed to send message. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'An error occurred. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-dark mb-4">Contact Me</h1>
        <p className="text-xl text-text-default">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-card rounded-lg shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-default mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-primary-dark rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white text-text-default"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-default mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-primary-dark rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white text-text-default"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-text-default mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-primary-dark rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white text-text-default"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-default mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-primary-dark rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white text-text-default"
                required
                disabled={isSubmitting}
              />
            </div>
            
            {submitStatus && (
              <div className={`p-3 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-card rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-text-dark mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-text-dark mb-2">
                  Email
                </h3>
                <p className="text-text-default">
                  <a href="mailto:mantomarchi300@outlook.com" className="text-accent hover:text-accent-dark">
                    mantomarchi300@outlook.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-dark mb-2">
                  Location
                </h3>
                <p className="text-text-default">
                  Nice, France
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-dark mb-2">
                  Social Media
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/mallocode200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-default hover:text-accent"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/mallocode300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-default hover:text-accent"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://x.com/mallocode200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-default hover:text-accent"
                  >
                    Twitter (X)
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-text-dark mb-6">
              Availability
            </h2>
            <p className="text-text-default mb-4">
              I'm currently available for:
            </p>
            <ul className="list-disc list-inside text-text-default space-y-2">
              <li>Consulting projects</li>
              <li>Speaking engagements</li>
              <li>Research collaborations</li>
              <li>Technical writing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 