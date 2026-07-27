import { CssClassesType, joinCss } from "@/app/_lib/utils"
import styles from "./expanded.module.css"
import { MouseEvent, ReactNode } from "react"

export const Expanded = ({
  children,
  cssClasses,
  onClick,
}: {
  children: ReactNode
  cssClasses?: CssClassesType
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}) => {
  return (
    <div className={joinCss(cssClasses, styles.root)} onClick={onClick}>
      {children}
    </div>
  )
}
