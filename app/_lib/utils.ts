import fs from "fs"
import path from "path"

/////////////
// String //
////////////

export const isEmptyArray = (value: unknown): boolean => {
  if (!value) return true
  if (!Array.isArray(value)) return true
  if (value.length === 0) return true
  return false
}

export type CssClassesType = string | (string | undefined | null)[]
export const joinCss = (
  ...cssClasses: (string | undefined | null | CssClassesType)[]
): string => {
  return cssClasses
    .flat(1)
    .filter((x) => x)
    .join(" ")
}

///////////
// File //
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

const getFileNamesInFolderByExtension = (
  dictionaryPath: string,
  extensions: string[]
): string[] => {
  const path = joinPaths(process.cwd(), dictionaryPath)
  preventPathTraversal(path)

  const results = fs
    .readdirSync(path)
    .filter((f) => extensions.some((ext) => f.endsWith(ext)))

  return results
}

export const getTypescriptFileNamesInFolder = (
  dictionaryPath: string
): string[] => getFileNamesInFolderByExtension(dictionaryPath, [".ts", ".tsx"])
