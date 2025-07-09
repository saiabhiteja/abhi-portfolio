import { MDXLayoutRenderer } from '@/components/snippets/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import ConnectCollaborateSection from '@/components/connect/ConnectCollaborateSection'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
      <ConnectCollaborateSection />
    </>
  )
}
