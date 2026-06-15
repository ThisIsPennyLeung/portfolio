import { BlogPost } from "@/app/components/page/blog/model/blogPost"
import { List } from "@/app/components/widget/list/list"
import { Padding } from "@/app/components/widget/padding/padding"
import { joinCss } from "@/app/lib/utils"
import styles from "./blogDetail.module.css"

export const BlogDetail = ({ blogPost }: { blogPost: BlogPost }) => {
  if (!blogPost) throw new Error("BlogDetail: blogPost is undefined")

  return (
    <List>
      <Padding>
        <h3 className={joinCss(styles.title)}>{blogPost.title}</h3>
        <div className={joinCss(styles.content)}>{blogPost.content}</div>
      </Padding>
    </List>
  )
}
