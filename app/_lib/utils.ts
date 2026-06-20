import fs from "fs"
import path from "path"

/////////////
// String //
////////////

export const isObject = (value: unknown): boolean => {
  if (value === null || value === undefined) return false
  if (Array.isArray(value)) return false
  if (typeof value === "object") return true
  return false
}

export const isArray = (value: unknown): boolean => {
  if (Array.isArray(value)) return true
  return false
}

export const isObjectOrArrayContainValue = (value: unknown): boolean => {
  if (isObject(value)) return true
  if (isArray(value) && (value as unknown[]).length > 0) return true
  console.log(value)
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

/*turbopackIgnore: true*/
const getFileNamesInFolderByExtension = async (
  dictionaryPath: string,
  {
    extension = "",
    omittedFileNameExtension = false,
    recursive = false,
  }: {
    extension?: string
    omittedFileNameExtension?: boolean
    recursive?: boolean
  } = {}
): Promise<string[]> => {
  const path = joinPaths(process.cwd(), dictionaryPath)
  preventPathTraversal(path)

  let temp = await fs.promises.readdir(path, {
    recursive: recursive,
  })
  if (extension) temp = temp.filter((x) => x.endsWith(extension))
  if (omittedFileNameExtension)
    temp = temp.map((x) => x.replace(/\.[^/.]+$/, ""))

  const results = temp
  return results
}

// Hint: `import` need nearly hardcoded path, otherelse will get `Error: Cannot find module as expression is too dynamic`
export const getImportNamesInFolder = async (
  dictionaryPath: string,
  extension: string
): Promise<string[]> =>
  await getFileNamesInFolderByExtension(dictionaryPath, {
    extension,
    omittedFileNameExtension: true,
    recursive: true,
  })
