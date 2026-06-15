import { Expanded } from "@/app/components/widget/expanded/expanded"
import { CssClassesType, joinCss } from "@/app/lib/utils"
import { CSSProperties, ReactNode } from "react"
import styles from "./overlay.module.css"

type OverlayPosition = {
  left?: number
  top?: number
  right?: number
  bottom?: number
}

const calculateOverlayPosition = (
  position: OverlayPosition | undefined
): CSSProperties | undefined => {
  if (!position) return undefined

  const { left, top, right, bottom } = position
  const positionStyles: CSSProperties = {
    left: left === null || left === undefined ? undefined : `${left}`,
    top: top === null || top === undefined ? undefined : `${top}`,
    right: right === null || right === undefined ? undefined : `${right}`,
    bottom: bottom === null || bottom === undefined ? undefined : `${bottom}`,
  }

  const containValue = Object.keys(positionStyles).length != 0
  if (!containValue) return undefined
  return positionStyles
}

export const Overlay = ({
  children,
  cssClasses,
  overlay,
  overlayAsBackground = false,
  overlayPosition = undefined,
}: {
  children: ReactNode
  cssClasses?: CssClassesType
  overlayAsBackground?: boolean
  overlay: ReactNode
  overlayPosition?: OverlayPosition
}) => {
  const overlayStyle = calculateOverlayPosition(overlayPosition)
  const overlayWrapper = (
    <div className={styles.overlay} style={overlayStyle}>
      {overlay}
    </div>
  )
  const before = overlayAsBackground ? overlayWrapper : null
  const after = overlayAsBackground ? null : overlayWrapper

  return (
    <div className={joinCss(cssClasses, styles.root)}>
      {before}
      <div className={styles.children}>
        <Expanded cssClasses={styles.restore}>{children}</Expanded>
      </div>
      {after}
    </div>
  )
}
