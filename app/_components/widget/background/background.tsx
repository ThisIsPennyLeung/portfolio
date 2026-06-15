import { Expanded } from "@/app/_components/widget/expanded/expanded"
import { Image } from "@/app/_components/widget/image/image"
import { Overlay } from "@/app/_components/widget/overlay/overlay"
import { CssClassesType, joinCss } from "@/app/_lib/utils"
import backgroundImage from "@/assets/background.png"
import { ReactNode } from "react"
import styles from "./background.module.css"

const BackgroundImageElement = () => {
  const backdrop = (
    <Expanded cssClasses={styles.backdrop}>
      <div></div>
    </Expanded>
  )
  return (
    <Expanded>
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        cssClasses={joinCss(styles.backgroundImage, styles.background)}
      />
      {backdrop}
    </Expanded>
  )
}

export const Background = ({
  children,
  cssClasses,
}: {
  children: ReactNode
  cssClasses?: CssClassesType
}) => {
  return (
    <Overlay
      cssClasses={joinCss(cssClasses, styles.root)}
      overlayAsBackground
      overlay={<BackgroundImageElement />}
    >
      {children}
    </Overlay>
  )
}
