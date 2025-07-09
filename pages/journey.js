import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/layout/SEO'
import { motion } from 'framer-motion'
import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'
import Link from '@/components/common/Link'
import { useState, useRef } from 'react'
import experienceData from '@/data/experienceData'
import educationData from '@/data/educationData'
import internshipData from '@/data/internshipData'
import ConnectCollaborateSection from '@/components/connect/ConnectCollaborateSection'

export default function Journey() {
  const [selectedYear, setSelectedYear] = useState(2023)
  const [dragStartX, setDragStartX] = useState(0)
  const containerRef = useRef(null)

  // internshipData is now imported from '@/data/internshipData'

  // Combine all data and get unique years
  const allData = [...educationData, ...experienceData, ...internshipData]

  // Get all years that have events (including ongoing events)
  const getAllYears = () => {
    const years = new Set()

    // Add all years from 2017 to current year to ensure all years are accessible
    const currentYear = new Date().getFullYear()
    for (let year = 2017; year <= currentYear; year++) {
      years.add(year)
    }

    // Also add any years from the data
    allData.forEach((item) => {
      const endYear = item.endYear || currentYear
      for (let year = item.startYear; year <= endYear; year++) {
        years.add(year)
      }
    })

    return Array.from(years).sort((a, b) => b - a)
  }

  const years = getAllYears()

  // Month order for sorting
  const monthOrder = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  // Filter and sort data for selected year by month
  const getYearData = (year) => {
    const yearData = []

    allData.forEach((item) => {
      const startYear = item.startYear
      const endYear = item.endYear || new Date().getFullYear()
      const isOngoing = item.endYear === null

      // Check if this item spans across the selected year
      if (year >= startYear && year <= endYear) {
        // Create a copy of the item for this specific year
        const yearItem = { ...item }

        // Determine which month to show for this year
        if (year === startYear) {
          // First year - show start month
          yearItem.month = item.startMonth
          yearItem.isStart = true
        } else if (year === endYear && !isOngoing) {
          // Last year - show end month (only if not ongoing)
          yearItem.month = item.endMonth
          yearItem.isEnd = true
        } else {
          // Middle year or ongoing - show as ongoing
          yearItem.month = isOngoing ? 'Present' : 'Ongoing'
          yearItem.isOngoing = true
        }

        yearData.push(yearItem)
      }
    })

    return yearData.sort((a, b) => {
      if (a.month === 'Present') return -1 // Present should come first
      if (b.month === 'Present') return 1
      if (a.month === 'Ongoing') return 1
      if (b.month === 'Ongoing') return -1
      const aIndex = monthOrder.indexOf(a.month)
      const bIndex = monthOrder.indexOf(b.month)
      return aIndex - bIndex
    })
  }

  const currentYearData = getYearData(selectedYear)

  // Group data by month
  const getMonthGroups = (yearData) => {
    const groups = {}
    yearData.forEach((item) => {
      const monthKey = item.month
      if (!groups[monthKey]) {
        groups[monthKey] = []
      }
      groups[monthKey].push(item)
    })
    return groups
  }

  const monthGroups = getMonthGroups(currentYearData)

  const handleDragEnd = (event, info) => {
    const currentIndex = years.indexOf(selectedYear)
    const threshold = 50

    if (info.offset.x > threshold && currentIndex > 0) {
      // Dragged right - go to previous year
      setSelectedYear(years[currentIndex - 1])
    } else if (info.offset.x < -threshold && currentIndex < years.length - 1) {
      // Dragged left - go to next year
      setSelectedYear(years[currentIndex + 1])
    }
  }

  const handleYearClick = (year) => {
    setSelectedYear(year)
  }

  const handlePrevYear = () => {
    const currentIndex = years.indexOf(selectedYear)
    if (currentIndex > 0) {
      setSelectedYear(years[currentIndex - 1])
    }
  }

  const handleNextYear = () => {
    const currentIndex = years.indexOf(selectedYear)
    if (currentIndex < years.length - 1) {
      setSelectedYear(years[currentIndex + 1])
    }
  }

  const SectionCard = ({ title, icon: Icon, children, color = 'blue' }) => {
    const colorClasses = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`rounded-xl border p-6 ${colorClasses[color]} mb-8`}
      >
        <div className="mb-6 flex items-center space-x-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm dark:bg-gray-800">
            <Icon className={`h-6 w-6 text-${color}-600 dark:text-${color}-400`} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
        </div>
        {children}
      </motion.div>
    )
  }

  const YearCard = ({ year, isSelected, onClick }) => {
    const yearData = getYearData(year)
    const eventCount = yearData.length

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`relative cursor-pointer rounded-xl p-6 transition-all duration-300 ${
          isSelected
            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl'
            : 'bg-white text-gray-900 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-gray-100'
        }`}
      >
        <div className="text-center">
          <h3
            className={`text-3xl font-bold ${
              isSelected ? 'text-white' : 'text-gray-900 dark:text-gray-100'
            }`}
          >
            {year}
          </h3>
          <p
            className={`mt-2 text-sm ${
              isSelected ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            {eventCount} event{eventCount !== 1 ? 's' : ''}
          </p>
        </div>
      </motion.div>
    )
  }

  // Helper to get the 3-year window centered on selectedYear
  function getYearWindow(years, selectedYear) {
    const idx = years.indexOf(selectedYear)
    if (years.length <= 3) return years
    if (idx <= 1) return years.slice(0, 3)
    if (idx >= years.length - 2) return years.slice(-3)
    return years.slice(idx - 1, idx + 2)
  }

  const DragSlider = () => {
    const visibleYears = getYearWindow(years, selectedYear)
    const firstYear = years[years.length - 1]
    const lastYear = years[0]
    return (
      <div className="mb-8">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Explore Your Journey
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {currentYearData.length} events in {selectedYear} • {years.length} total years
          </div>
        </div>
        {/* Instructions above the slider */}
        <div className="mb-4 flex flex-col items-center">
          <div className="text-center text-sm text-white/80">
            <div>Use arrows to navigate</div>
            <div className="mt-1 text-xs">Click any year to jump directly</div>
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl items-center justify-center">
          {/* Left Arrow - absolutely positioned, more visible */}
          <button
            onClick={handlePrevYear}
            disabled={selectedYear === firstYear}
            className="absolute left-0 top-1/2 z-30 -translate-y-1/2 rounded-full border-2 border-blue-400 bg-white/80 p-4 shadow-xl hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
            style={{ marginLeft: '-56px' }}
          >
            <FaChevronLeft className="h-8 w-8 text-blue-600" />
          </button>
          {/* Year cards - always 3 visible, spaced out, blue background slightly reduced in width */}
          <div className="flex w-full min-w-[860px] max-w-[720px] justify-center space-x-10 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 px-16 py-4 shadow-lg">
            {visibleYears.map((year) => (
              <div key={year} className="w-44 flex-shrink-0">
                <YearCard
                  year={year}
                  isSelected={selectedYear === year}
                  onClick={() => handleYearClick(year)}
                />
              </div>
            ))}
          </div>
          {/* Right Arrow - absolutely positioned, more visible */}
          <button
            onClick={handleNextYear}
            disabled={selectedYear === lastYear}
            className="absolute right-0 top-1/2 z-30 -translate-y-1/2 rounded-full border-2 border-blue-400 bg-white/80 p-4 shadow-xl hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
            style={{ marginRight: '-56px' }}
          >
            <FaChevronRight className="h-8 w-8 text-blue-600" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <PageSEO
        title={`Journey - ${siteMetadata.author}`}
        description="My educational and professional journey"
      />
      <div className="mx-auto max-w-4xl">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            My Journey
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My educational and professional journey from learning to code to building scalable
            software solutions. Each step has shaped my growth as a software engineer.
          </p>
        </div>

        {/* Drag Slider */}
        <DragSlider />

        {/* Year Content with Month Sorting */}
        {currentYearData.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                {selectedYear} Timeline
              </h2>
            </div>

            {/* Timeline with months */}
            <div className="relative">
              {/* Main timeline line - runs through the center of the stack */}
              <div className="absolute left-8 top-0 h-full w-1 bg-blue-300 dark:bg-blue-700"></div>
              {Object.entries(monthGroups)
                .sort((a, b) => monthOrder.indexOf(a[0]) - monthOrder.indexOf(b[0]))
                .map(([month, items], monthIndex) => (
                  <div key={month} className="mb-12">
                    {items.map((item, itemIndex) => (
                      <div
                        key={`${month}-${itemIndex}`}
                        className="mb-12 flex flex-row items-start"
                      >
                        {/* Timeline vertical stack: month in blue circle only */}
                        <div className="relative mr-2 flex min-w-[80px] flex-col items-center">
                          {/* Month circle (no year, just month name) */}
                          {itemIndex === 0 ? (
                            <div className="mb-1 flex h-8 w-16 items-center justify-center rounded-full border-2 border-blue-300 bg-blue-100 text-center text-xs font-bold text-blue-700">
                              {month}
                            </div>
                          ) : (
                            <div className="mb-1 h-8 w-16"></div>
                          )}
                          {/* No dot here */}
                        </div>
                        {/* Timeline card - aligned horizontally with the month */}
                        <div className="ml-4 flex-1">
                          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                            <div className="mb-4 flex flex-wrap items-center gap-3">
                              <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                <FaCalendarAlt className="mr-2 h-3 w-3" />
                                {item.range}
                              </div>
                              <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-2 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                <FaMapMarkerAlt className="mr-2 h-3 w-3" />
                                {item.location}
                              </div>
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">
                              {item.title || item.degree}
                            </h3>
                            <div className="mb-4">
                              <span className="text-lg font-semibold">
                                {item.url ? (
                                  <Link
                                    href={item.url}
                                    className="special-underline text-primary-color-500 no-underline hover:text-gray-100 dark:text-primary-color-500 hover:dark:text-gray-100"
                                  >
                                    {item.company || item.institution}
                                  </Link>
                                ) : (
                                  <span className="special-underline text-primary-color-500 no-underline hover:text-gray-100 dark:text-primary-color-500 hover:dark:text-gray-100">
                                    {item.company || item.institution}
                                  </span>
                                )}
                              </span>
                            </div>
                            {item.description && (
                              <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                                {item.description}
                              </p>
                            )}
                            {/* Education specific details */}
                            {(item.gpa || item.percentage || item.grade) && (
                              <div className="mb-4 flex flex-wrap gap-3">
                                {item.gpa && (
                                  <span className="rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                    GPA: {item.gpa}
                                  </span>
                                )}
                                {item.percentage && (
                                  <span className="rounded-full bg-green-100 px-3 py-2 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                    Percentage: {item.percentage}
                                  </span>
                                )}
                                {item.grade && (
                                  <span className="rounded-full bg-purple-100 px-3 py-2 text-sm font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                                    Grade: {item.grade}
                                  </span>
                                )}
                              </div>
                            )}
                            {/* Work/Internship achievements */}
                            {item.achievements && (
                              <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                                  Key Achievements:
                                </h4>
                                <ul className="space-y-3">
                                  {item.achievements.map((achievement, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                      <span className="mt-2 text-lg text-blue-500">•</span>
                                      <span className="leading-relaxed text-gray-700 dark:text-gray-300">
                                        {achievement}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center"
          >
            <div className="text-gray-500 dark:text-gray-400">
              <FaCalendarAlt className="mx-auto mb-4 h-12 w-12 opacity-50" />
              <p className="text-lg">No events recorded for {selectedYear}</p>
              <p className="mt-2 text-sm">Drag to select a different year</p>
            </div>
          </motion.div>
        )}

        {/* Let's Connect Section */}
        <ConnectCollaborateSection />
      </div>
    </>
  )
}
