import { getBlogPosts } from 'app/blog/utils'
import { getArtworkPosts } from 'app/artwork/utils'

export const baseUrl = 'https://devbry.dev'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let artwork = getArtworkPosts().map((post) => ({
    url: `${baseUrl}/artwork/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/blog', '/artwork'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs, ...artwork]
}
