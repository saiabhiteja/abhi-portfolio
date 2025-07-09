import siteMetadata from '@/data/siteMetadata'
import blogsData from '@/data/blogsData'
import BlogCard from '@/components/blog/BlogCard'
import { PageSEO } from '@/components/layout/SEO'

export default function Blogs() {
  return (
    <>
      <PageSEO
        title={`Blogs - ${siteMetadata.author}`}
        description="A collection of my technical blog posts and articles"
      />
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Blogs
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            A collection of my technical blog posts and articles about software engineering,
            distributed systems, and technology
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {blogsData.map((d) => (
              <BlogCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                medium={d.medium}
                tech1={d.tech1}
                tech2={d.tech2}
                tech3={d.tech3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
