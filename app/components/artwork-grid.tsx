import Image from 'next/image'
import Link from 'next/link'
import { getArtworkPosts } from 'app/artwork/utils'

export function ArtworkGrid() {
  let allArtwork = getArtworkPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {allArtwork.map((post) => (
        <Link
          key={post.slug}
          href={`/artwork/${post.slug}`}
          className="group block"
        >
          <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-900">
            <Image
              src={post.metadata.thumbnail}
              alt={post.metadata.title}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
          <p className="mt-2 text-sm text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-naples-yellow transition-colors">
            {post.metadata.title}
          </p>
        </Link>
      ))}
    </div>
  )
}
