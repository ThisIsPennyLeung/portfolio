import { Expanded } from "@/app/_components/widget/expanded/expanded"
import { CssClassesType, joinCss } from "@/app/_lib/utils"
import { ReactNode } from "react"
import styles from "./blogLayout.module.css"

export const BlogLayout = ({
  biography,
  blogPosts,
  tag,
  cssClasses,
}: {
  biography: ReactNode
  blogPosts: ReactNode
  cssClasses?: CssClassesType
  tag: ReactNode
}) => {
  const debugCss = false ? styles.debug : ""

  return (
    <div className={joinCss(cssClasses, styles.root, debugCss)}>
      <div className={joinCss([styles.biography])}>
        <Expanded>{biography}</Expanded>
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
