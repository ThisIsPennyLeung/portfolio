import { Card } from "@/app/_components/widget/card/card"
import { List } from "@/app/_components/widget/list/list"
import { BlogPost } from "@/app/_lib/fetch/blogPost"

export const BlogDetailCard = ({
  blogPost,
  truncated = false,
}: {
  blogPost: BlogPost
  truncated?: boolean
}) => {
  const content = truncated ? <blogPost.Truncated /> : <blogPost.Content />

  return (
    <List>
      <Card>
        <article>
          <h3>{blogPost.meta.title}</h3>
          <div>{content}</div>
        </article>
      </Card>
    </List>
  )
}
