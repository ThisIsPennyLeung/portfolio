import { BlogDetail } from "@/app/components/page/blog/detail/blogDetail"
import { getAllBlogPosts, getBlogPostBySlug } from "@/app/lib/fetch/blogPost"

export const generateStaticParams = async () => {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  return <BlogDetail blogPost={post} />
}

export default Page
