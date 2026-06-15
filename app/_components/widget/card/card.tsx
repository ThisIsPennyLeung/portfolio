import { Expanded } from "@/app/_components/widget/expanded/expanded"
import { Padding } from "@/app/_components/widget/padding/padding"
import { CssClassesType, joinCss } from "@/app/_lib/utils"
import { ReactNode } from "react"
import styles from "./card.module.css"

export const Card = ({
  children,
  cssClasses,
}: {
  children: ReactNode
  cssClasses?: CssClassesType
}) => {
  return (
    <div className={joinCss(cssClasses, styles.root)}>
      <Expanded>
        <Padding direction="immediateUnderCard">
          <div className={styles.content}>{children}</div>
        </Padding>
      </Expanded>
    </div>
  )
}
