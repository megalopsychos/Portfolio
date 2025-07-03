import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrism from 'rehype-prism-plus'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export type BlogPost = {
  slug: string
  title: string
  date: string
  description: string
  content: React.ReactNode
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      ...(data as { title: string; date: string; description: string })
    }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const { content: mdxContent } = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: false,
        mdxOptions: {
          rehypePlugins: [
            [rehypePrism, { showLineNumbers: false }]
          ],
        },
      },
    })

    return {
      slug,
      content: mdxContent,
      ...(data as { title: string; date: string; description: string })
    }
  } catch (error) {
    console.error('Failed to load MDX post:', error)
    return null;  }
}