import { useRouter } from 'next/router'
import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => {
  const { basePath } = useRouter()
  return (
    <NextImage
      unoptimized
      {...rest}
      placeholder="blur"
      blurDataURL={`${basePath}/static/images/SVG-placeholder.png`}
    />
  )
}

export default Image
