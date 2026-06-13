import { BlogPost } from "@/app/components/page/blog/model/blogPost"
import { joinCss } from "@/app/lib/utils"
import { ReactNode } from "react"
import styles from "./blogDetail.module.css"

export const BlogDetail = ({
  metadata,
  content,
}: {
  metadata: BlogPost
  content: ReactNode
}) => {
  return (
    <article className={joinCss(styles.root)}>
      <h3 className={joinCss(styles.title)}>{metadata.title}</h3>
      {/* TODO */}
      <div className={joinCss(styles.content)}>{content}</div>
    </article>
  )
}

export default BlogDetail
