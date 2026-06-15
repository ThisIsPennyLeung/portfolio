import { CssClassesType, joinCss } from "@/app/_lib/utils"
import { ReactNode } from "react"
import styles from "./link.module.css"

export const Link = ({
  children,
  cssClasses,
  href,
}: {
  children: ReactNode
  cssClasses?: CssClassesType
  href: string
}) => {
  return (
    <a href={href} className={joinCss(cssClasses, styles.root)}>
      {children}
    </a>
  )
}
