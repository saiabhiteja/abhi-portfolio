import Link from '@/components/common/Link'

const Experience = ({ title, company, location, range, url, ...textFields }) => {
  // Extract all text fields (text1, text2, text3, text4, etc.)
  const textPoints = Object.keys(textFields)
    .filter((key) => key.startsWith('text'))
    .sort()
    .map((key) => textFields[key])
    .filter((text) => text && text.trim() !== '')

  return (
    <div className="my-3">
      <div className="flex flex-row text-xl">
        <span className="text-gray-500 dark:text-gray-400">{title}</span>{' '}
        <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>{' '}
        <span className="text-primary-color-500">
          <Link href={url} className="company">
            {company}
          </Link>
        </span>
      </div>
      <div>
        <div className="p-1 font-mono text-sm text-gray-400 dark:text-gray-600">{range}</div>
        <div className="p-2">
          {textPoints.map((text, index) => (
            <div key={index} className="flex flex-row">
              <div className="mr-2 text-lg text-primary-color-500"> &#8227;</div>
              <div className="text-gray-500 dark:text-gray-400">{text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-center text-center text-2xl font-medium text-gray-200  dark:text-gray-600">
        &#126;&#126;&#126;
      </div>
    </div>
  )
}

export default Experience
