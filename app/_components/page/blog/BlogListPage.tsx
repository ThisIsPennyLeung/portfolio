import { BlogDetailCard } from "@/app/_components/page/blog/blogDetailCard/BlogDetailCard"
import { BlogPost } from "@/app/_components/page/blog/model/blogPost"
import { Link } from "@/app/_components/widget/link/link"
import { List } from "@/app/_components/widget/list/list"
import { getAllBlogPosts } from "@/app/_lib/fetch/blogPost"

const BlogListItem = ({ blogPost }: { blogPost: BlogPost }) => {
  if (!blogPost) throw new Error("BlogListItem: blogPost is undefined")

  return (
    <Link href={`/blog/${blogPost.slug}`}>
      <BlogDetailCard blogPost={blogPost} />
    </Link>
  )
}

export const BlogListPage = async () => {
  const items = await getAllBlogPosts()

  return (
    <List>
      {items.map((x) => (
        <BlogListItem key={x.slug} blogPost={x} />
      ))}
    </List>
  )
}
