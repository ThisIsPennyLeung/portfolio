import { getImportNamesInFolder } from "@/app/_lib/serverUtils"
import { toSlug } from "@/app/_lib/utils"
import { ComponentType } from "react"

interface BlogPostMarkdown {
  publish: boolean
  title: string
  tags: string[]
}

export type BlogPost = BlogPostMarkdown & {
  // runtime
  content: ComponentType
  slug: string
}

export const getAllBlogPosts = async (
  includeUnpublish = false
): Promise<BlogPost[]> => {
  const path = "app/_lib/fetch/blogPost"
  const extension = ".md"
  const files = await getImportNamesInFolder(path, extension)

  // Hint: `import` need nearly hardcoded path, otherelse will get `Error: Cannot find module as expression is too dynamic`
  const posts = (
    await Promise.all(
      files.map(async (x) => {
        const fullPath = `@/${path}/${x}${extension}`
        const { frontmatter: markdown, default: content } = await import(
          fullPath
        )
        const blogPost = {
          ...markdown,
          //
          content,
          slug: toSlug(markdown.title),
        } as BlogPost

        if (!blogPost.publish && !includeUnpublish) return null
        return { fullPath, blogPost }
      })
    )
  )
    .filter((x) => !!x)
    .sort((a, b) => a.fullPath.localeCompare(b.fullPath))
    .map((x) => x.blogPost)

  return posts
}

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost> => {
  const posts = await getAllBlogPosts()

  const post = posts.find((p) => p.slug === slug)
  if (!post) throw new Error(`Blog post not found: ${slug}`)

  return post
}
