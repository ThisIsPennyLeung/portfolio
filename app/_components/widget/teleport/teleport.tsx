"use client"

import { Context, ReactNode, useState } from "react"
import { Overlay } from "../overlay/overlay"
import { Expanded } from "../expanded/expanded"
import styles from "./teleport.module.css"
import { joinCss } from "@/app/_lib/utils"

export type TeleportContextType =
  | {
      show: (
        element: ReactNode,
        { closeOnBackdropClicked }: { closeOnBackdropClicked?: boolean }
      ) => void
      hide: () => void
    }
  | undefined

export const TeleportContextProvider = ({
  context,
  children,
  closeOnBackdropClicked = false,
}: {
  context: Context<TeleportContextType>
  children: ReactNode
  closeOnBackdropClicked?: boolean
}) => {
  const empty = undefined
  const [overlay, setOverlay] = useState<ReactNode>(empty)

  const show = (element: ReactNode) => {
    const wrapper = (
      <Expanded cssClasses={styles.backdrop} onClick={hide}>
        <div className={joinCss(styles.contentPosition)}>
          {element}
          <div>{/*dummy*/}</div>
        </div>
      </Expanded>
    )
    setOverlay(wrapper)
  }

  const hide = () => {
    if (!closeOnBackdropClicked) return
    setOverlay(empty)
  }

  return (
    <context.Provider value={{ show, hide }}>
      <Overlay cssClasses={styles.root} overlay={overlay}>
        {children}
      </Overlay>
    </context.Provider>
  )
}
