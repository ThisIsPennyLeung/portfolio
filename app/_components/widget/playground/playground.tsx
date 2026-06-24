"use client"

import { Padding } from "@/app/_components/widget/padding/padding"
import {
  PlaygroundContextProivder,
  PlaygroundSupportedTypeEnum,
} from "@/app/_components/widget/playground/playgroundContext/playgroundContext"
import { PlaygroundEditor } from "@/app/_components/widget/playground/playgroundEditor/playgroundEditor"
import { PlaygroundOutput } from "@/app/_components/widget/playground/playgroundOutput/playgroundOutput"
import { joinCss } from "@/app/_lib/utils"
import styles from "./playground.module.css"

export type PlaygroundType = { css: string; html: string }

export const Playground = ({ css, html }: { css: string; html: string }) => {
  return (
    <PlaygroundContextProivder>
      <div className={joinCss(styles.root)}>
        <Padding>
          <div className={joinCss(styles.grid)}>
            <div className={joinCss(styles.liveEditorLabelCss)}>
              <span>Css:</span>
            </div>
            <div className={joinCss(styles.liveEditorCss)}>
              <PlaygroundEditor
                type={PlaygroundSupportedTypeEnum.css}
                value={css}
              />
            </div>
            <div className={joinCss(styles.liveEditorLabelHtml)}>
              <span>Html:</span>
            </div>
            <div className={joinCss(styles.liveEditorHtml)}>
              <PlaygroundEditor
                type={PlaygroundSupportedTypeEnum.html}
                value={html}
              />
            </div>
            <div className={joinCss(styles.livePreviewLabel)}>
              <span>Output:</span>
            </div>
            <div className={joinCss(styles.livePreview)}>
              <PlaygroundOutput />
            </div>
          </div>
        </Padding>
      </div>
    </PlaygroundContextProivder>
  )
}
