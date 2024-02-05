import NextHead from 'next/head'

interface CustomHeadProps {
  title: string
  description: string
  image: string
  url: string
}

export default function CustomHead(props: CustomHeadProps) {
  const { title, description, image, url } = props

  return (
    <NextHead>
      <title>{title}</title>
      <meta name='description' content={description} />

      {/* Meta tags Open Graph para compartilhamento em redes sociais */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={url} />

      {/* Meta tags Twitter Card para compartilhamento no Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </NextHead>
  )
}
