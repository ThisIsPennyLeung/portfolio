import { useMDXComponents } from "@/mdx-components"
import { evaluate, EvaluateOptions } from "@mdx-js/mdx"
import fs from "fs"
import path from "path"
import * as jsxRuntime from "react/jsx-runtime"
import rehypeTruncate from "rehype-truncate"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"

//////////
// file //
//////////

export const preventPathTraversal = (dictionaryPath: string): void => {
  const root = path.join(process.cwd())
  const absolutePath = path.resolve(root, dictionaryPath)

  if (!absolutePath.startsWith(root))
    throw new Error(`Directory traversal detected: ${dictionaryPath}`)
}

const joinPaths = (...paths: string[]): string => {
  const joinedPath = path.join(...paths)
  preventPathTraversal(joinedPath)
  return joinedPath
}

const getFileNamesInFolderByExtension = async (
  dictionaryPath: string,
  {
    extension = "",
    recursive = false,
  }: {
    extension?: string
    recursive?: boolean
  } = {}
): Promise<string[]> => {
  const path = joinPaths(process.cwd(), dictionaryPath)
  preventPathTraversal(path)

  let temp = (
    await fs.promises.readdir(path, {
      recursive: recursive,
    })
  ).map((x) => `${path}/${x}`)
  if (extension) temp = temp.filter((x) => x.endsWith(extension))

  const results = temp
  return results
}

const readFile = async (fullPath: string): Promise<string> => {
  preventPathTraversal(fullPath)

  const result = await fs.promises.readFile(fullPath, "utf8")
  return result
}

///////////
// image //
///////////

export const getImageAsBase64 = async (fileFullPath: string) => {
  const fileBuffer = await fs.promises.readFile(fileFullPath)
  const base64Image = `data:image/png;base64,${fileBuffer.toString("base64")}`
  return base64Image
}

//////////////
// markdown //
//////////////

export type ReadMarkdownType<T> = Awaited<
  ReturnType<typeof readMarkdown<T>>
>[number]
export const readMarkdown = async <T>(dictionaryPath: string) => {
  const filesFullPath = await getFileNamesInFolderByExtension(dictionaryPath, {
    extension: "md",
    recursive: true,
  })
  const results = await Promise.all(
    filesFullPath.map(async (fullPath) => {
      const content = await readFile(fullPath)
      const settings: EvaluateOptions = {
        ...jsxRuntime,
        useMDXComponents: useMDXComponents,
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }
      const { frontmatter: meta, default: Content } = await evaluate(content, {
        ...settings,
        ...{ scope: "aaa" },
      })
      const { default: Truncated } = await evaluate(content, {
        ...settings,
        ...{
          rehypePlugins: [...(settings.rehypePlugins || []), rehypeTruncate],
        },
      })
      const result = { meta: { ...(meta as T), fullPath }, Content, Truncated }
      return result
    })
  )
  return results
}
