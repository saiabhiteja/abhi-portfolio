import { useState } from 'react'

const CodeBlock = ({ title, description, languages, mediumLink }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(Object.keys(languages)[0])
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(languages[selectedLanguage])
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="my-8 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        </div>
        {description && (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
        )}
      </div>

      {/* Language Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {Object.keys(languages).map((lang) => (
          <button
            key={lang}
            onClick={() => setSelectedLanguage(lang)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedLanguage === lang
                ? 'border-b-2 border-blue-600 bg-white text-blue-600 dark:border-blue-400 dark:bg-gray-900 dark:text-blue-400'
                : 'bg-gray-50 text-gray-600 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-100'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Code Block with Copy Button */}
      <div className="relative bg-white dark:bg-gray-900">
        <div className="absolute right-2 top-2 z-10">
          <button
            onClick={copyToClipboard}
            className={`rounded-md px-3 py-1 text-xs font-medium transition-all duration-200 ${
              copied
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
            }`}
          >
            {copied ? (
              <div className="flex items-center space-x-1">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Copied!</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>Copy</span>
              </div>
            )}
          </button>
        </div>
        <div className="p-4 pt-12">
          <pre className="overflow-x-auto">
            <code className={`language-${selectedLanguage.toLowerCase()}`}>
              {languages[selectedLanguage]}
            </code>
          </pre>
        </div>
      </div>

      {/* Medium Link Section - Only show if mediumLink exists */}
      {mediumLink && (
        <div className="border-t border-gray-200 bg-gradient-to-r from-orange-50 to-yellow-50 dark:border-gray-700 dark:from-orange-900/20 dark:to-yellow-900/20">
          <div className="px-4 py-3">
            <a
              href={mediumLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-orange-200 bg-white p-3 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md dark:border-orange-700 dark:bg-gray-800"
            >
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Read the full article
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Detailed explanation on Medium
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-orange-600 group-hover:text-orange-700 dark:text-orange-400 dark:group-hover:text-orange-300">
                <span className="text-sm font-medium">Read</span>
                <svg
                  className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default CodeBlock
