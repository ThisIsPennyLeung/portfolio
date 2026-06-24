"use client"

import { LiveError, LivePreview, withLive } from "react-live"
import root from "react-shadow"
import styles from "./playgroundOutput.module.css"

export const PlaygroundOutput = withLive(({ live }) => {
  const error = live.error
  const liveError = <LiveError className={styles.liveElement} />
  const preview = (
    <root.div>
      <style>{`
        :host > div { 
          height: 100%;
        }
      `}</style>
      <LivePreview className={styles.liveElement} />
    </root.div>
  )

  const result = error ? liveError : preview
  return <div className={styles.root}> {result}</div>
})
