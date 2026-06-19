import { CssClassesType, joinCss } from "@/app/_lib/utils"
import { ReactNode } from "react"
import styles from "./link.module.css"

export const Link = ({
  children,
  cssClasses,
  href,
  target,
}: {
  children: ReactNode
  cssClasses?: CssClassesType
  href: string
  target?: "blank" | "self"
}) => {
  const targetAttr = !!target ? `_${target}` : undefined
  return (
    <a
      href={href}
      className={joinCss(cssClasses, styles.root)}
      target={targetAttr}
    >
      {children}
    </a>
  )
}
