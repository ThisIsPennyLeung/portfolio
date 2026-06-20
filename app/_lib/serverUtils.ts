import fs from "fs"
import path from "path"

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
