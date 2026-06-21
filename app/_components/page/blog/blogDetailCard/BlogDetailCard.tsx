import { Card } from "@/app/_components/widget/card/card"
import { List } from "@/app/_components/widget/list/list"
import { BlogPost } from "@/app/_lib/fetch/blogPost"

export const BlogDetailCard = ({ blogPost }: { blogPost: BlogPost }) => {
  return (
    <List>
      <Card>
        <article>
          <h3>{blogPost.meta.title}</h3>
          <div>
            <blogPost.Content />
          </div>
        </article>
      </Card>
    </List>
  )
}
