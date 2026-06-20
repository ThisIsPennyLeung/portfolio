import { Playground } from "@/app/_components/widget/playground/playground"
import type { MDXComponents } from "mdx/types"

const components: MDXComponents = {
  pre: ({ children }) => {
    const preElement = children.props as React.HTMLAttributes<HTMLPreElement>
    const code = preElement.children as string
    return <Playground code={code} />
  },
} satisfies MDXComponents

export const useMDXComponents = (): MDXComponents => {
  return components
}
