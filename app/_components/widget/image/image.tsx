"use client"

import { CssClassesType, joinCss } from "@/app/_lib/utils"
import ExportedImage from "next-image-export-optimizer"
import { ComponentProps, createContext, ReactNode, useContext } from "react"
import styles from "./image.module.css"
import { Center } from "../center/center"
import { TeleportContextType } from "../teleport/teleport"

const ImageZoomOverlay = ({ children }: { children: ReactNode }) => {
  const { hide } = useImageTeleportContext()
  const closeModal = () => {
    hide()
  }

  return (
    <div className={styles.zoomWrapper} onClick={closeModal}>
      <Center cssClasses={styles.zoomImage}>{children}</Center>
    </div>
  )
}

const ZoomableWrapper = ({ children }: { children: ReactNode }) => {
  const { show } = useImageTeleportContext()
  const openModal = () => {
    show(<ImageZoomOverlay>{children}</ImageZoomOverlay>, {})
  }

  return (
    <div className={joinCss(styles.zoomWrapper)} onClick={openModal}>
      {children}
    </div>
  )
}

export const Image = ({
  cssClasses,
  canZoom = false,
  ...attribute
}: ComponentProps<typeof ExportedImage> & {
  cssClasses?: CssClassesType
  canZoom?: boolean
}) => {
  const image = <ExportedImage {...attribute} />
  const content = canZoom ? <ZoomableWrapper>{image}</ZoomableWrapper> : image

  return <div className={joinCss(cssClasses, styles.root)}>{content}</div>
}

/////////////
// context //
/////////////

export const ImageTeleportContext =
  createContext<TeleportContextType>(undefined)

const useImageTeleportContext = () => {
  const context = useContext(ImageTeleportContext)
  if (!context) throw new Error("Not wrapped in ImageTeleportContextProvider")
  return context
}
