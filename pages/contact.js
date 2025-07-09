import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/layout/SEO'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
  const contactInfo = [
    {
      name: 'Email',
      value: 'saiabhitejachepuri@gmail.com',
      href: 'mailto:saiabhitejachepuri@gmail.com',
      icon: FaEnvelope,
      brandColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-700',
      textColor: 'text-green-600 dark:text-green-400',
    },
    {
      name: 'GitHub',
      value: 'saiabhitejachepuri',
      href: 'https://github.com/saiabhitejachepuri',
      icon: FaGithub,
      brandColor: 'bg-gray-800 dark:bg-gray-700',
      hoverColor: 'hover:bg-gray-900 dark:hover:bg-gray-600',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20',
      borderColor: 'border-gray-200 dark:border-gray-700',
      textColor: 'text-gray-700 dark:text-gray-300',
    },
    {
      name: 'LinkedIn',
      value: 'saiabhitejachepuri',
      href: 'https://www.linkedin.com/in/saiabhitejachepuri/',
      icon: FaLinkedin,
      brandColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-700',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      name: 'Twitter',
      value: 'saiabhitejachepuri',
      href: 'https://twitter.com/saiabhitejachepuri',
      icon: FaTwitter,
      brandColor: 'bg-sky-500',
      hoverColor: 'hover:bg-sky-600',
      bgColor: 'bg-sky-50 dark:bg-sky-900/20',
      borderColor: 'border-sky-200 dark:border-sky-700',
      textColor: 'text-sky-600 dark:text-sky-400',
    },
  ]

  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="Get in touch with me" />
      <div className="mx-auto max-w-4xl overflow-hidden">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14">
            Let's Connect
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            I'm always open to discussing new opportunities, interesting projects, or just having a
            chat about technology and software engineering.
          </p>
        </motion.div>

        {/* CTA Section - Moved to Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center dark:from-gray-900/50 dark:to-gray-800/50"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Ready to Start a Conversation?
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-gray-600 dark:text-gray-400">
            Whether you have a project in mind, want to discuss technology, or just want to say
            hello, I'd love to hear from you!
          </p>
          <motion.a
            href="mailto:saiabhitejachepuri@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
          >
            <FaEnvelope className="mr-2 h-4 w-4" />
            Send me an email
          </motion.a>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            I typically respond within 24 hours
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-xl border-2 p-6 transition-all duration-300 ${contact.bgColor} ${contact.borderColor} hover:shadow-lg`}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${contact.brandColor} ${contact.hoverColor} shadow-md transition-all duration-300 group-hover:scale-110`}
                >
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 transition-colors group-hover:text-gray-700 dark:text-gray-100 dark:group-hover:text-gray-200">
                    {contact.name}
                  </h3>
                  <p className="font-mono text-sm text-gray-600 transition-colors group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                    {contact.value}
                  </p>
                  <div
                    className={`mt-1 text-xs font-medium ${contact.textColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  >
                    Click to connect →
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Contact
