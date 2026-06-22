"use client"

import { Padding } from "@/app/_components/widget/padding/padding"
import { joinCss } from "@/app/_lib/utils"
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
  withLive,
} from "react-live"
import root from "react-shadow"
import styles from "./playground.module.css"

export type PlaygroundType = { code: string }

const Output = withLive(({ live }) => {
  if (live.error) {
    return <LiveError className={styles.liveElement} />
  }

  // 3. Otherwise, show the preview
  return (
    <root.div className={styles.shadowRoot}>
      <style>{`
        :host > div { 
          height: 100%;
        }
      `}</style>
      <LivePreview className={styles.liveElement} />
    </root.div>
  )
})

export const Playground = ({ code }: PlaygroundType) => {
  return (
    <div className={joinCss(styles.root)}>
      <Padding>
        <div className={joinCss(styles.grid)}>
          <LiveProvider code={code} noInline>
            <div className={joinCss(styles.liveEditorLabel)}>
              <span>Code:</span>
            </div>
            <div className={joinCss(styles.liveEditor)}>
              <LiveEditor className={styles.liveElement} />
            </div>
            <div className={joinCss(styles.livePreviewLabel)}>
              <span>Output:</span>
            </div>
            <div className={joinCss(styles.livePreview)}>
              <Output />
            </div>
          </LiveProvider>
        </div>
      </Padding>
    </div>
  )
}
