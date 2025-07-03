import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Comments from '@/components/Comments'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }


  return (
    <article className="prose prose-neutral max-w-none prose-pre:p-0 mb-8">
      <h1 className="text-2xl font-semibold underline mb-2">{post.title}</h1>
      <time className="text-sm text-gray-500 block mb-8">{post.date}</time>
      {post.content}
      <Comments />
    </article>
  )
}