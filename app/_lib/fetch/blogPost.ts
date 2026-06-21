import { readMarkdown, ReadMarkdownType } from "@/app/_lib/serverUtils"
import { toSlug } from "@/app/_lib/utils"

interface BlogPostMeta {
  publish: boolean
  title: string
  tags: string[]
}

export type BlogPost = ReadMarkdownType<BlogPostMeta> & {
  slug: string
}

export const getAllBlogPosts = async ({
  includeUnpublish = false,
} = {}): Promise<BlogPost[]> => {
  const blogPosts = await readMarkdown<BlogPostMeta>("app/_lib/fetch/blogPost")
  const result = blogPosts
    .filter((x) => includeUnpublish || x.meta.publish)
    .map((x) => {
      return { ...x, slug: toSlug(x.meta.title) }
    })
    .sort((a, b) => a.meta.fullPath.localeCompare(b.meta.fullPath))

  return result
}

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost> => {
  const posts = await getAllBlogPosts()

  const post = posts.find((p) => p.slug === slug)
  if (!post) throw new Error(`Blog post not found: ${slug}`)

  return post
}
