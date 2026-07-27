import { BlogListPage } from "@/app/_components/page/blog/BlogListPage"
import { getBlogsGroupByTags } from "@/app/_lib/fetch/blogPost"

export const generateStaticParams = async () => {
  const blogPosts = await getBlogsGroupByTags()
  const results = Object.keys(blogPosts).map((x) => ({ tag: x }))
  return results
}

const Page = async ({ params }: { params: { tag: string } }) => {
  const { tag } = await params
  const blogPosts = await getBlogsGroupByTags()
  const blogPostsByTag = blogPosts[tag]

  return <BlogListPage blogPosts={blogPostsByTag} />
}
export default Page
