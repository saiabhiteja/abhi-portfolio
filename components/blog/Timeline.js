import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Link from '@/components/common/Link'

const Timeline = ({ data }) => {
  return (
    <div className="relative">
      {/* Timeline Header with Calendar Icon */}
      <div className="mb-8 flex items-center space-x-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
          <FaCalendarAlt className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">My Journey</h2>
          <p className="text-gray-600 dark:text-gray-400">My professional timeline</p>
        </div>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {data.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute left-8 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-blue-500 shadow-lg dark:border-gray-800"></div>

              {/* Timeline Card */}
              <div className="ml-16 rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
                {/* Date and Location Row */}
                <div className="mb-4 flex flex-wrap items-center gap-4">
                  {/* Date Badge */}
                  <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    <FaCalendarAlt className="mr-2 h-3 w-3" />
                    {item.range}
                  </div>

                  {/* Location Badge */}
                  <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    <FaMapMarkerAlt className="mr-2 h-3 w-3" />
                    {item.location}
                  </div>
                </div>

                {/* Title and Company */}
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
                <div className="mb-4">
                  <span className="text-lg font-medium">
                    {item.url ? (
                      <Link
                        href={item.url}
                        className="special-underline text-primary-color-500 no-underline hover:text-gray-100 dark:text-primary-color-500 hover:dark:text-gray-100"
                      >
                        {item.company}
                      </Link>
                    ) : (
                      <span className="special-underline text-primary-color-500 no-underline hover:text-gray-100 dark:text-primary-color-500 hover:dark:text-gray-100">
                        {item.company}
                      </span>
                    )}
                  </span>
                </div>

                {/* Description */}
                {item.description && (
                  <div className="mb-4">
                    <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                )}

                {/* Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {item.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"></span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Company Link */}
                {item.url && (
                  <div className="mt-6">
                    <Link
                      href={item.url}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Visit {item.company}
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
