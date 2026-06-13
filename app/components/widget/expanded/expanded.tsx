import { CssClassesType, joinCss } from "@/app/lib/utils"
import { ReactNode } from "react"
import styles from "./expanded.module.css"

export const Expanded = ({
  children,
  cssClasses,
}: {
  children: ReactNode
  cssClasses?: CssClassesType
}) => {
  return <div className={joinCss(cssClasses, styles.root)}>{children}</div>
}
