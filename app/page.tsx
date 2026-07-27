import { BlogListPage } from "@/app/_components/page/blog/BlogListPage"
import { getAllBlogPosts } from "./_lib/fetch/blogPost"

const Page = async () => {
  const blogPosts = await getAllBlogPosts()
  return <BlogListPage blogPosts={blogPosts} />
}
export default Page
