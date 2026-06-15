import { Center } from "@/app/_components/widget/center/center"
import { Padding } from "@/app/_components/widget/padding/padding"
import {
  CssClassesType,
  isObjectOrArrayContainValue,
  joinCss,
} from "@/app/_lib/utils"
import { ReactNode } from "react"
import styles from "./list.module.css"

type directionEnum = "vertical" | "horizontal"

const ItemList = ({
  children,
  direction,
}: {
  children: ReactNode
  direction: directionEnum
}) => {
  return (
    <div className={joinCss(styles.itemList, styles[direction])}>
      {children}
    </div>
  )
}

const EmptyItemList = ({ emptyMessage }: { emptyMessage?: string }) => {
  const message = emptyMessage || "No items available"
  return (
    <Padding>
      <Center cssClasses={styles.empty}>{message}</Center>
    </Padding>
  )
}

export const List = ({
  children,
  emptyMessage,
  cssClasses,
  direction = "vertical",
}: {
  children: ReactNode
  emptyMessage?: string
  cssClasses?: CssClassesType
  direction?: directionEnum
}) => {
  const isEmpty = !isObjectOrArrayContainValue(children)
  const content = isEmpty ? (
    <EmptyItemList emptyMessage={emptyMessage} />
  ) : (
    <ItemList direction={direction}>{children}</ItemList>
  )

  return <div className={joinCss(cssClasses, styles.root)}>{content}</div>
}
