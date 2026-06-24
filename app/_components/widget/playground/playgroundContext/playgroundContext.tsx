"use client"

import { createContext, ReactNode, useContext, useMemo, useState } from "react"
import { LiveProvider } from "react-live"

/////////////////////
// internal method //
/////////////////////

export enum PlaygroundSupportedTypeEnum {
  css = "css",
  html = "html",
}
const mapping = {
  [PlaygroundSupportedTypeEnum.html]: {
    getter: (state: StateType) => state._html,
    setter: (state: StateType, x: string) => {
      state._html = x
      buildOutput(state)
    },
  },
  [PlaygroundSupportedTypeEnum.css]: {
    getter: (state: StateType) => state._css,
    setter: (state: StateType, x: string) => {
      state._css = x
      buildOutput(state)
    },
  },
}
const buildOutput = (state: StateType) => {
  const output = `
const Example = () => {
  return <>
    <style>{\`
      ${state._css}
    \`}</style>

    ${state._html}
  </>
}
render(<Example />)
`
  state.output = output
}

///////////
// store //
///////////

type StateType = typeof state
const state = {
  _css: "",
  _html: "",
  output: "",
}
const createStore = (forceRender: () => void) => {
  const thiz = {
    ...state,
    //
    getCode(type: PlaygroundSupportedTypeEnum) {
      const x = mapping[type]
      if (!x) throw new Error(`Not support type ${type}`)
      const result = x.getter(thiz)
      return result
    },
    updateCode(type: PlaygroundSupportedTypeEnum, code: string | undefined) {
      const x = mapping[type]
      if (!x) throw new Error(`Not support type ${type}`)
      x.setter(thiz, (code || "").trim())
      forceRender()
    },
  }
  return thiz
}

/////////////
// context //
/////////////

const PlaygroundContext = createContext(createStore(() => {}))
export const usePlaygroundContext = () => {
  const context = useContext(PlaygroundContext)
  if (!context) throw new Error("Not wrapped in PlaygroundContextProvider")
  return context
}
export const PlaygroundContextProivder = ({
  state,
  children,
}: {
  state?: StateType
  children: ReactNode
}) => {
  // Hint just a no meaning bit
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [forceRender, setForceRender] = useState(1)
  const togglerRender = () =>
    setForceRender((x) => (x >= Number.MAX_VALUE ? 0 : x + 1))

  const store = useMemo(() => createStore(togglerRender), [])
  const contextValue = useMemo(
    () => ({
      ...state,
      ...store,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state, store, forceRender]
  )

  return (
    <PlaygroundContext.Provider value={contextValue}>
      <PlaygroundContextLiveProvider>{children}</PlaygroundContextLiveProvider>
    </PlaygroundContext.Provider>
  )
}

const PlaygroundContextLiveProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const { output } = usePlaygroundContext()

  return (
    <LiveProvider noInline code={output}>
      {children}
    </LiveProvider>
  )
}
