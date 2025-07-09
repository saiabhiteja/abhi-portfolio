/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import CustomLink from '../common/Link'
import TOCInline from '../blog/TOCInline'
import Pre from './Pre'
import CodeBlock from './CodeBlock'

export const MDXComponents = {
  TOCInline,
  a: CustomLink,
  pre: Pre,
  CodeBlock,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
