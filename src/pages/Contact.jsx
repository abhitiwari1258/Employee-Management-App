import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-auto bg-gradient-to-br from-gray-50 to-blue-100 py-12 px-6">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-10">

      
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600 mb-6">
            Have questions, feedback, or need support? Reach out to us and we’ll
            get back to you as soon as possible.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📍 Gurgaon, India</p>
            <p>📧 support@Starkcompany.com</p>
            <p>📞 +91 98765 43210</p>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            We usually respond within 24 hours.
          </div>
        </div>

       
        <form className="space-y-5">

          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>
      
      <div className="text-center mt-10 text-sm text-gray-500">
        We value your feedback and will respond promptly.
      </div>

    </div>
  )
}

export default Contact
