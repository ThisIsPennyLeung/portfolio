import { Expanded } from "@/app/_components/widget/expanded/expanded"
import { Padding } from "@/app/_components/widget/padding/padding"
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
      <Expanded cssClasses={[styles.title]}>
        <Padding>
          <Expanded>{title}</Expanded>
        </Padding>
      </Expanded>
      <Expanded cssClasses={[styles.blogPosts]}>
        <Padding>
          <Expanded>{blogPosts}</Expanded>
        </Padding>
      </Expanded>
      <Expanded cssClasses={[styles.tag]}>
        <Padding>
          <Expanded>{tag}</Expanded>
        </Padding>
      </Expanded>
    </div>
  )
}
