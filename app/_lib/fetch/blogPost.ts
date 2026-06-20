import { getImportNamesInFolder } from "@/app/_lib/serverUtils"
import { ComponentType } from "react"

export interface BlogPost {
  order: number
  slug: string
  title: string
  summary: string
  content: ComponentType
}

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  const path = "app/_lib/fetch/blogPost"
  const extension = ".md"
  const files = await getImportNamesInFolder(path, extension)

  // Hint: `import` need nearly hardcoded path, otherelse will get `Error: Cannot find module as expression is too dynamic`
  const posts = (
    await Promise.all(
      files.map(async (x) => {
        const imported = await import(`@/${path}/${x}${extension}`)
        const blogPost = {
          ...imported.frontmatter,
          content: imported.default,
        } as BlogPost
        return blogPost
      })
    )
  ).sort((a, b) => b.order - a.order)

  return posts
}

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost> => {
  const posts = await getAllBlogPosts()

  const post = posts.find((p) => p.slug === slug)
  if (!post) throw new Error(`Blog post not found: ${slug}`)

  return post
}
