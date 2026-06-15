import { Expanded } from "@/app/_components/widget/expanded/expanded"
import { Padding } from "@/app/_components/widget/padding/padding"
import { CssClassesType, joinCss } from "@/app/_lib/utils"
import styles from "./listAndSummaryLayout.module.css"

export const ListAndSummaryLayout = ({
  list,
  summary,
  cssClasses,
}: {
  list: React.ReactNode
  cssClasses?: CssClassesType
  summary: React.ReactNode
}) => {
  const debugCss = false ? styles.debug : ""

  return (
    <div className={joinCss(cssClasses, styles.root, debugCss)}>
      <Expanded cssClasses={[styles.list]}>
        <Padding>
          <Expanded>{list}</Expanded>
        </Padding>
      </Expanded>
      <Expanded cssClasses={[styles.summary]}>
        <Padding>
          <Expanded>{summary}</Expanded>
        </Padding>
      </Expanded>
    </div>
  )
}
