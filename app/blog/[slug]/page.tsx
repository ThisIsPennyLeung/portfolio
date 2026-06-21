import { BlogDetailPage } from "@/app/_components/page/blog/BlogDetailPage"
import { getAllBlogPosts } from "@/app/_lib/fetch/blogPost"

export const generateStaticParams = async () => {
  const blogPosts = await getAllBlogPosts()
  const results = blogPosts.map((post) => ({ slug: post.slug }))
  return results
}

const Page = async ({ params }: { params: { slug: string } }) => {
  return <BlogDetailPage params={params} />
}
export default Page
