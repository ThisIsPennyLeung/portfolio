import { CssClassesType, joinCss } from "@/app/lib/utils"
import { ReactNode } from "react"
import styles from "./padding.module.css"

export const Padding = ({
  children = <span />,
  cssClasses,
  direction = "both",
}: {
  children?: ReactNode
  cssClasses?: CssClassesType
  direction?: "vertical" | "horizontal" | "both" | "immediateUnderRoot"
}) => {
  return (
    <div className={joinCss(cssClasses, styles.padding, styles[direction])}>
      {children}
    </div>
  )
}
