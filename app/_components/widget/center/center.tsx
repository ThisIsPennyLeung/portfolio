import { Expanded } from "@/app/_components/widget/expanded/expanded"
import { CssClassesType, joinCss } from "@/app/_lib/utils"
import { ReactNode } from "react"
import styles from "./center.module.css"

export const Center = ({
  children,
  cssClasses,
  axis = "both",
}: {
  children: ReactNode
  cssClasses?: CssClassesType
  axis?: "horizontal" | "vertical" | "both"
}) => {
  return (
    <Expanded>
      <div className={joinCss(cssClasses, styles.center, styles[`${axis}`])}>
        {children}
      </div>
    </Expanded>
  )
}
