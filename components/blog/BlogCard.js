import SocialIcon from '../social/social-icons'

const BlogCard = ({ title, description, imgSrc, href, medium, tech1, tech2, tech3 }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-md hover:border-primary-500 hover:bg-gray-300 dark:border-gray-700 dark:hover:border-primary-500 dark:hover:bg-gray-800">
      <div className="p-6">
        <div className="flex flex-row items-center justify-between">
          <div className="my-2">
            <div className="h-8 w-8 text-primary-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mx-1.5">
              {href ? <SocialIcon kind="external" href={href} size="6" /> : null}
            </div>
            <div className="mx-1.5">
              {medium ? <SocialIcon kind="medium" href={medium} size="6" /> : null}
            </div>
          </div>
        </div>
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>

        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-row justify-between">
          <div className="text-sm text-gray-400">
            {tech1} &#8226; {tech2} &#8226; {tech3}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default BlogCard
