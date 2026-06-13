import { List } from "@/app/components/widget/list/list"
import { Padding } from "@/app/components/widget/padding/padding"
import { joinCss } from "@/app/lib/utils"
import { ReactNode } from "react"
import styles from "./blogListItem.module.css"

export const BlogListItem = ({
  title,
  content,
}: {
  title: string
  content: ReactNode
}) => {
  return (
    <article className={joinCss(styles.root)}>
      <Padding>
        <List>
          <Padding>
            <h3 className={joinCss(styles.title)}>{title}</h3>
          </Padding>
          <Padding>
            <div className={joinCss(styles.content)}>{content}</div>
          </Padding>
        </List>
      </Padding>
    </article>
  )
}
