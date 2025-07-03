import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <main>
      <h1 className="text-3xl mb-6">Blog</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="space-y-2">
            <h2 className="text-xl hover:text-gray-600">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <time className="text-sm text-gray-500">{post.date}</time>
            <p className="text-gray-700">{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  )
}