import { Expanded } from "@/app/components/widget/expanded/expanded"
import { CssClassesType, joinCss } from "@/app/lib/utils"
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
