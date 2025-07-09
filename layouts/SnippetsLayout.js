import Link from '@/components/common/Link'
import Tag from '@/components/blog/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/blog/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function SnippetsLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const [selectedTag, setSelectedTag] = useState('')

  // Get all unique tags from posts
  const allTags = [...new Set(posts.flatMap((post) => post.tags))].sort()

  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    const matchesSearch = searchContent.toLowerCase().includes(searchValue.toLowerCase())
    const matchesTag = selectedTag === '' || frontMatter.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue && selectedTag === ''
      ? initialDisplayPosts
      : filteredBlogPosts

  return (
    <>
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>

          {/* Tags Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Filter by tags:
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag('')}
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  selectedTag === ''
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                  className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="relative max-w-lg">
            <input
              aria-label="Search snippets"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search snippets"
              className="block w-full rounded-md border border-gray-400 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <Link
                key={slug}
                href={`/snippets/${slug}`}
                className="bg-day·dark:bg-night·group group relative flex transform cursor-pointer flex-wrap border border-gray-200 bg-opacity-50 p-px py-px transition duration-200 hover:scale-105 dark:border-gray-700 dark:bg-opacity-50"
              >
                <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-primary-500 duration-200 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 h-full w-0.5 origin-bottom scale-y-0 transform bg-primary-500 duration-200 group-hover:scale-y-100" />
                <div className="absolute left-0 top-0 h-0.5 w-full origin-right scale-x-0 transform bg-primary-500 duration-200 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 h-full w-0.5 origin-top scale-y-0 transform bg-primary-500 duration-200 group-hover:scale-y-100" />
                <div className="bg-day dark:bg-night relative space-y-2 rounded-2xl p-4">
                  <article>
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight ">
                        <Link
                          href={`/snippets/${slug}`}
                          className="text-gray-900 transition  duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                        >
                          {title}
                        </Link>
                      </h2>
                      <div className="prose prose-base max-w-none text-gray-500 sm:prose-lg dark:text-gray-400">
                        {summary}
                      </div>

                      <div className="flex flex-wrap pt-2">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && selectedTag === '' && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
