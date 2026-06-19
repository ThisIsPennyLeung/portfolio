import { Expanded } from "@/app/_components/widget/expanded/expanded"
import { CssClassesType, joinCss } from "@/app/_lib/utils"
import { ReactNode } from "react"
import styles from "./blogLayout.module.css"

export const BlogLayout = ({
  title,
  blogPosts,
  tag,
  cssClasses,
}: {
  title: ReactNode
  blogPosts: ReactNode
  cssClasses?: CssClassesType
  tag: ReactNode
}) => {
  const debugCss = false ? styles.debug : ""

  return (
    <div className={joinCss(cssClasses, styles.root, debugCss)}>
      <div className={joinCss([styles.title])}>
        <Expanded>{title}</Expanded>
      </div>
      <div className={joinCss([styles.blogPosts])}>
        <Expanded>{blogPosts}</Expanded>
      </div>
      <div className={joinCss([styles.tag])}>
        <Expanded>{tag}</Expanded>
      </div>
    </div>
  )
}
