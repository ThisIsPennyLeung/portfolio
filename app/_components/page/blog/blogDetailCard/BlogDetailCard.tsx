import { BlogPost } from "@/app/_components/page/blog/model/blogPost"
import { Card } from "@/app/_components/widget/card/card"
import { List } from "@/app/_components/widget/list/list"

export const BlogDetailCard = ({ blogPost }: { blogPost: BlogPost }) => {
  return (
    <List>
      <Card>
        <article>
          <h3>{blogPost.title}</h3>
          <div>{blogPost.content}</div>
        </article>
      </Card>
    </List>
  )
}
