import { BlogDetailCard } from "@/app/_components/page/blog/blogDetailCard/BlogDetailCard"
import { getBlogPostBySlug } from "@/app/_lib/fetch/blogPost"

export const BlogDetailPage = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const { slug } = await params
  const blogPost = await getBlogPostBySlug(slug)
  return <BlogDetailCard blogPost={blogPost} />
}
