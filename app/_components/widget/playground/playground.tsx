"use client"

import { List } from "@/app/_components/widget/list/list"
import { Padding } from "@/app/_components/widget/padding/padding"
import { joinCss } from "@/app/_lib/utils"
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
  withLive,
} from "react-live"
import styles from "./playground.module.css"

export type PlaygroundType = { code: string }

const Output = withLive(({ live }) => {
  if (live.error) {
    return <LiveError className={styles.liveElement} />
  }

  // 3. Otherwise, show the preview
  return <LivePreview className={styles.liveElement} />
})

export const Playground = ({ code }: PlaygroundType) => {
  return (
    <div className={joinCss(styles.root)}>
      <Padding>
        <div className={joinCss(styles.grid)}>
          <LiveProvider code={code}>
            <div className={joinCss(styles.liveEditor)}>
              <List>
                <span>Code:</span>
                <LiveEditor className={styles.liveElement} />
              </List>
            </div>
            <div className={joinCss(styles.livePreview)}>
              <List>
                <span>Output:</span>
                <Output />
              </List>
            </div>
          </LiveProvider>
        </div>
      </Padding>
    </div>
  )
}
