"use client"

import {
  PlaygroundSupportedTypeEnum,
  usePlaygroundContext,
} from "@/app/_components/widget/playground/playgroundContext/playgroundContext"
import { useDebounce } from "@/app/_lib/clientUtils"
import { joinCss } from "@/app/_lib/utils"
import { Editor as Monaco } from "@monaco-editor/react"
import type { editor } from "monaco-editor"
import { useEffect } from "react"
import styles from "./playgroundEditor.module.css"

export const PlaygroundEditor = ({
  type,
  value = "",
}: {
  type: PlaygroundSupportedTypeEnum
  value?: string
}) => {
  const { getCode, updateCode } = usePlaygroundContext()
  const options = {
    lineHeight: 19,
    minimap: { enabled: false },
    scrollbar: {
      vertical: "hidden",
    },
    scrollBeyondLastLine: false,
  } as editor.IStandaloneEditorConstructionOptions

  const monacoCode = getCode(type)
  const height = (monacoCode.split("\n").length + 2) * options.lineHeight!

  const debouncedOnChange = useDebounce(200, (value: string | undefined) =>
    updateCode(type, value)
  )
  useEffect(() => {
    updateCode(type, value)
  }, [updateCode, type, value])

  return (
    <Monaco
      height={height}
      className={joinCss(styles.root)}
      defaultLanguage={type.toString()}
      value={monacoCode}
      onChange={debouncedOnChange}
      options={options}
      theme="vs-dark"
    />
  )
}
