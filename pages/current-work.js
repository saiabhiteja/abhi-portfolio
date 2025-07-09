import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/layout/SEO'
import {
  FaCode,
  FaBook,
  FaRocket,
  FaLightbulb,
  FaBriefcase,
  FaLaptopCode,
  FaGraduationCap,
} from 'react-icons/fa'
import Link from 'next/link'
import experienceData from '@/data/experienceData'
import ConnectCollaborateSection from '@/components/connect/ConnectCollaborateSection'

const currentJob =
  experienceData.find((exp) => exp.range && exp.range.toLowerCase().includes('present')) ||
  experienceData[0]

export default function CurrentWork() {
  const currentWork = [
    {
      title: `${currentJob.title} @ ${currentJob.company}`,
      description: `${currentJob.range} | ${currentJob.location}`,
      items: currentJob.achievements,
      icon: FaBriefcase,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      title: 'Currently Exploring',
      description:
        'I am currently exploring AI frameworks and building projects using the latest advancements in artificial intelligence.',
      items: ['Experimenting with AI/ML frameworks', 'Building hands-on AI projects'],
      icon: FaLaptopCode,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      title: 'Goals',
      description:
        'My current goals are to become a Guardian at LeetCode and to build impactful AI projects.',
      items: ['Achieve Guardian status at LeetCode', 'Build and deploy AI-powered applications'],
      icon: FaGraduationCap,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
  ]

  return (
    <>
      <PageSEO
        title={`Current Work - ${siteMetadata.author}`}
        description="What I'm currently working on, learning, and planning"
      />
      <div className="mx-auto max-w-4xl">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Current Work & Learning
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here's what I'm currently working on, learning, and planning for the future.
          </p>
        </div>

        <div className="space-y-8">
          {currentWork.map((section, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 ${section.bgColor} border border-gray-200 dark:border-gray-700`}
            >
              <div className="mb-4 flex items-center space-x-3">
                <div className={`rounded-lg bg-white p-2 shadow-sm dark:bg-gray-800`}>
                  <section.icon className={`h-6 w-6 ${section.color}`} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {section.title}
                </h2>
              </div>

              <p className="mb-4 text-gray-600 dark:text-gray-400">{section.description}</p>

              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <span className="mt-1 text-blue-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ConnectCollaborateSection />
      </div>
    </>
  )
}
