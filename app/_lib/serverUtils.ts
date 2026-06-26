"server only"

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

export const getFileName = (pathAndFile: string) => {
  preventPathTraversal(pathAndFile)

  const result = path.basename(pathAndFile)
  return result
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
  ).map(
    (x) =>
      // Hint: no full path in serverUtils
      `./${dictionaryPath}/${x}`
  )
  if (extension) temp = temp.filter((x) => x.endsWith(extension))

  const results = temp
  return results
}

const readFile = async (fullPath: string): Promise<string> => {
  preventPathTraversal(fullPath)

  const result = await fs.promises.readFile(fullPath, "utf8")
  return result
}

export const createFolder = async (
  dictionaryPath: string,
  { ignoreExist = false } = {}
) => {
  const isExist = await folderOrFileIsExist(dictionaryPath)
  if (!isExist && !ignoreExist) return

  const path = joinPaths(process.cwd(), dictionaryPath)
  preventPathTraversal(path)

  await fs.promises.mkdir(path, { recursive: true })
}

export const copyFile = async (from: string, to: string) => {
  const fromPath = joinPaths(process.cwd(), from)
  preventPathTraversal(fromPath)

  const toPath = joinPaths(process.cwd(), to)
  preventPathTraversal(toPath)

  await fs.promises.copyFile(fromPath, toPath, fs.constants.COPYFILE_FICLONE)
}

const folderOrFileIsExist = async (fileOrDictionaryPath: string) => {
  const path = joinPaths(process.cwd(), fileOrDictionaryPath)
  preventPathTraversal(path)

  try {
    await fs.promises.access(path)
    return true
  } catch {
    return false
  }
}

//////////////
// markdown //
//////////////

export type ReadMarkdownType<T> = Awaited<
  ReturnType<typeof readMarkdown<T>>
>[number]
export const readMarkdown = async <T>(dictionaryPath: string) => {
  const filesPath = await getFileNamesInFolderByExtension(dictionaryPath, {
    extension: "md",
    recursive: true,
  })
  const results = await Promise.all(
    filesPath.map(async (path) => {
      const content = await readFile(path)
      const settings: EvaluateOptions = {
        ...jsxRuntime,
        useMDXComponents: useMDXComponents,
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }
      const { frontmatter: meta, default: Content } = await evaluate(content, {
        ...settings,
      })
      const { default: Truncated } = await evaluate(content, {
        ...settings,
        ...{
          rehypePlugins: [...(settings.rehypePlugins || []), rehypeTruncate],
        },
      })
      const result = {
        meta: { ...(meta as T), path },
        Content,
        Truncated,
      }
      return result
    })
  )
  return results
}
