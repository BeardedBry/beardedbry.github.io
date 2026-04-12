import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
  
      <div className="my-8">
        <h3 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Blog</h3>
        <BlogPosts />
      </div>
    </section>
  )
}
