import { BlogDetailCard } from "@/app/_components/page/blog/blogDetailCard/BlogDetailCard"
import { Link } from "@/app/_components/widget/link/link"
import { List } from "@/app/_components/widget/list/list"
import { BlogPost } from "@/app/_lib/fetch/blogPost"

const BlogListItem = ({ blogPost }: { blogPost: BlogPost }) => {
  if (!blogPost) throw new Error("BlogListItem: blogPost is undefined")

  return (
    <Link href={`/blog/${blogPost.slug}`}>
      <BlogDetailCard blogPost={blogPost} truncated />
    </Link>
  )
}

export const BlogListPage = async ({
  blogPosts,
}: {
  blogPosts: BlogPost[]
}) => {
  if (!blogPosts) throw new Error("blogPosts is empty")

  return (
    <List>
      {blogPosts.map((x) => (
        <BlogListItem key={x.slug} blogPost={x} />
      ))}
    </List>
  )
}
