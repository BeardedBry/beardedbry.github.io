import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getArtworkPosts } from 'app/artwork/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getArtworkPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getArtworkPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    thumbnail,
  } = post.metadata
  let ogImage = image ?? thumbnail

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/artwork/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function ArtworkPost({ params }) {
  let post = getArtworkPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  let heroImage = post.metadata.image ?? post.metadata.thumbnail

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VisualArtwork',
            name: post.metadata.title,
            dateCreated: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: `${baseUrl}${heroImage}`,
            url: `${baseUrl}/artwork/${post.slug}`,
            creator: {
              '@type': 'Person',
              name: 'DevBry',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-3xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-8">
        <Image
          src={heroImage}
          alt={post.metadata.title}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
          priority
        />
      </div>
      <article className="prose">
        <CustomMDX source={post.content} size="2xl" />
      </article>
    </section>
  )
}
