import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/layout/SEO'
import { FaTrophy, FaAward, FaStar, FaChartLine, FaCode, FaUsers } from 'react-icons/fa'
import Link from 'next/link'

export default function Achievements() {
  const achievements = [
    {
      title: 'Professional Recognition',
      description:
        'Awards and recognition received for contributions and excellence in software engineering.',
      icon: FaTrophy,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      items: [
        'Code Award at Cloudera for significant contributions to projects and high code quality',
        'Recognized for reducing manual effort by 98% and cutting costs by 45% through automation',
        'Successfully led cross-functional team integration of CDE and Cloudera AI',
        'Achieved 56% cost reduction through Cloud Custodian policies implementation',
      ],
    },
    {
      title: 'Technical Achievements',
      description: 'Notable technical accomplishments and system improvements.',
      icon: FaCode,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      items: [
        'Built end-to-end PaaS Trials system serving thousands of customers',
        'Designed and developed Admin Console with comprehensive trial lifecycle management',
        'Architected Cadence workflows reducing manual processes by 98%',
        'Implemented monitoring systems with DataDog and Prometheus for proactive alerting',
        'Developed email verification system using DNS, SMTP & blocked domain lists',
      ],
    },
    {
      title: 'Performance Metrics',
      description: 'Quantifiable improvements and performance enhancements achieved.',
      icon: FaChartLine,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      items: [
        '98% reduction in manual effort through workflow automation',
        '45% cost reduction in cloud resource management',
        '56% cost savings through unused resource cleanup',
        '35% boost in query performance through SQL optimization',
        '60% increase in sales through analytics dashboard implementation',
      ],
    },
    {
      title: 'Leadership & Collaboration',
      description: 'Team leadership and collaborative achievements.',
      icon: FaUsers,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      items: [
        'Led team of 10 members during internship at Enviropromise',
        'Collaborated with cross-functional teams for CDE and Cloudera AI integration',
        'Mentored junior developers and shared knowledge through technical writing',
        'Coordinated project milestones and ensured successful delivery',
        'Actively contributed to developer community through open source',
      ],
    },
  ]

  const stats = [
    {
      label: 'Years of Experience',
      value: '2+',
      description: 'Software Engineering',
    },
    {
      label: 'Companies Worked',
      value: '3',
      description: 'Cloudera, MAQ Software, Enviropromise',
    },
    {
      label: 'Projects Completed',
      value: '10+',
      description: 'Production Systems',
    },
    {
      label: 'Technologies Mastered',
      value: '15+',
      description: 'Languages & Frameworks',
    },
  ]

  return (
    <>
      <PageSEO
        title={`Achievements - ${siteMetadata.author}`}
        description="My professional achievements, awards, and notable accomplishments"
      />
      <div className="mx-auto max-w-4xl">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Achievements & Recognition
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A collection of my professional achievements, awards, and notable accomplishments
            throughout my career.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Stats</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-800">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Sections */}
        <div className="space-y-8">
          {achievements.map((section, index) => (
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
      </div>
    </>
  )
}
