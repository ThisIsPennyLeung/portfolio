import { CssClassesType, joinCss } from "@/app/_lib/utils"
import { ReactNode } from "react"
import styles from "./padding.module.css"

export const Padding = ({
  children = <span />,
  cssClasses,
  direction = "both",
}: {
  children?: ReactNode
  cssClasses?: CssClassesType
  direction?:
    | "vertical"
    | "horizontal"
    | "both"
    | "immediateUnderRoot"
    | "immediateUnderCard"
}) => {
  return (
    <div className={joinCss(cssClasses, styles.root, styles[direction])}>
      {children}
    </div>
  )
}
