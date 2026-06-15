import { BlogDetailPage } from "@/app/_components/page/blog/BlogDetailPage"
import { getAllBlogPosts } from "@/app/_lib/fetch/blogPost"

export const generateStaticParams = async () => {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

const Page = async ({ params }: { params: { slug: string } }) => {
  return <BlogDetailPage params={params} />
}

export default Page
