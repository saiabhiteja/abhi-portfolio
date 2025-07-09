import Link from '@/components/common/Link'

export default function ConnectCollaborateSection({
  buttonLink = '/contact',
  buttonText = 'Start a Conversation',
}) {
  return (
    <section className="mx-auto my-16 max-w-4xl rounded-3xl bg-white/80 p-8 text-center shadow-xl backdrop-blur-md dark:bg-gray-900/80">
      {/* Icon */}
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
        <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      </div>
      {/* Heading */}
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        Let's Connect & Collaborate
      </h2>
      {/* Description */}
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
        Interested in discussing technology, exploring opportunities, or just having a chat about
        software engineering? I'm always excited to connect with fellow developers and tech
        enthusiasts.
      </p>
      {/* Button */}
      <Link
        href={buttonLink}
        className="mx-auto mb-4 flex w-fit items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <svg className="mr-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        {buttonText}
      </Link>
      {/* Footer */}
      <div className="text-md mt-2 text-gray-400 dark:text-gray-500">
        Let's discuss technology, opportunities, or just share ideas!
      </div>
    </section>
  )
}
