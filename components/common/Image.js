import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => (
  <NextImage
    unoptimized
    {...rest}
    placeholder="blur"
    blurDataURL="/static/images/SVG-placeholder.png"
  />
)

export default Image
