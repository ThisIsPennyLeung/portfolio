import { BlogListItem } from "@/app/components/page/blog/listItem/blogListItem"
import { List } from "@/app/components/widget/list/list"
import { getAllBlogPosts } from "@/app/lib/fetch/blogPost"

const BlogList = async () => {
  const items = await getAllBlogPosts()

  return (
    <List>
      {items.map((x) => (
        <BlogListItem key={x.slug} blogPost={x} />
      ))}
    </List>
  )
}

export const Page = async () => {
  return <BlogList />
}
export default Page
