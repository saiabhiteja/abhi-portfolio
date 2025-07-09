import Image from '@/components/common/Image'
import { PageSEO } from '@/components/layout/SEO'
import Link from '@/components/common/Link'
import Timeline from '@/components/blog/Timeline'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'
import { FaLinkedin } from 'react-icons/fa'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`A little trivia me`} />
      <div className="">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 md:pl-16">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full xl:rounded-full"
              placeholder="blur"
              blurDataURL="/static/images/SVG-placeholder.png"
            />
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex flex-col pt-3">
              <a
                className="rounded-full border px-8 py-2 text-center text-sm font-light text-gray-700 transition-colors hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white hover:shadow dark:text-white"
                href="https://www.linkedin.com/in/saiabhitejachepuri/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin className="mb-0.5 mr-2 inline h-5 w-5" />
                Say Hi!
              </a>
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2">
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color="#FF0000"
                animationDelay={300}
                animationDuration={3000}
              >
                {text1} Currently, I am focused on building scalable software solutions at{' '}
                <Link
                  href={'https://www.cloudera.com/'}
                  className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                >
                  Cloudera
                </Link>
              </RoughNotation>
            </p>
            <br />
            <p>
              This is what I am doing right{' '}
              <Link
                href={'/current-work'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                now
              </Link>
            </p>
            <br />
            <p className="sm:block md:hidden lg:hidden">
              {text2} I enjoy solving complex engineering challenges and sharing knowledge through
              technical writing. I am always looking to learn new things and currently working on
              scalable software solutions and distributed systems. I am passionate about exploring
              new technologies and contributing to the developer community.
            </p>
            <p className="hidden md:block">
              {text2} I enjoy solving complex engineering challenges and sharing knowledge through
              technical writing. I am always looking to learn new things and currently working on
              scalable software solutions and distributed systems. I am passionate about exploring
              new technologies and contributing to the developer community.
            </p>
            <br />
            <p>
              {text3} I am a strong advocate for open source and I am always interested in working
              on new projects with new people. Feel free to reach out if you have anything to talk
              about, you can reach me through{' '}
              <Link
                href={'mailto:saiabhitejachepuri@gmail.com'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Mail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="ml-0.5 inline-block h-4 w-4 fill-current"
                >
                  <g data-name="Layer 2">
                    <g data-name="external-link">
                      <rect width="24" height="24" opacity="0" />
                      <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                      <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                    </g>
                  </g>
                </svg>
              </Link>{' '}
              or{' '}
              <Link
                href={'https://www.linkedin.com/in/saiabhitejachepuri/'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                LinkedIn
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="ml-0.5 inline-block h-4 w-4 fill-current"
                >
                  <g data-name="Layer 2">
                    <g data-name="external-link">
                      <rect width="24" height="24" opacity="0" />
                      <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                      <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                    </g>
                  </g>
                </svg>
              </Link>
            </p>
            <br />
          </div>
        </div>

        {/* New Timeline Section */}
        <div className="mt-10 md:pl-16">
          <Timeline data={experienceData} />
        </div>

        {/* About this site section moved to bottom */}
        <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700 md:pl-16">
          <div className="prose max-w-none dark:prose-dark">
            <h1>About this site</h1>
            <p>
              Welcome to my home on the internet. This site functions as a blog/portfolio, a place
              to share code and thoughts. Opinions are my own.
            </p>
            <p>
              I learnt how to build this site from the most awesome people in the community:
              <ul>
                <li>
                  <Link
                    href={'https://github.com/timlrx/tailwind-nextjs-starter-blog'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Timothy's Next.js and Tailwind CSS template
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="ml-0.5 inline-block h-4 w-4 fill-current"
                    >
                      <g data-name="Layer 2">
                        <g data-name="external-link">
                          <rect width="24" height="24" opacity="0" />
                          <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                          <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                        </g>
                      </g>
                    </svg>
                  </Link>
                  : Template starter where I bootstrapped the project.
                </li>
                <li>
                  <Link
                    href={'https://www.einargudni.com/'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Einar Guðjónsson
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="ml-0.5 inline-block h-4 w-4 fill-current"
                    >
                      <g data-name="Layer 2">
                        <g data-name="external-link">
                          <rect width="24" height="24" opacity="0" />
                          <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                          <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                        </g>
                      </g>
                    </svg>
                  </Link>
                  : Now page, navigation style, animations and much more.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
