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

export const toSlug = (slug: string) => {
  const url = slug
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
  const result = encodeURIComponent(url)
  return result
}
