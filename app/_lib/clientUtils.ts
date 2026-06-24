import { useCallback, useEffect, useRef } from "react"

export const useDebounce = <T extends unknown[]>(
  milliseconds: number,
  func: (...args: T) => void
) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const clearTimeoutFunc = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  const debouncedFunc = useCallback(
    (...args: Parameters<(...args: T) => void>) => {
      clearTimeoutFunc()
      timeoutRef.current = setTimeout(() => {
        func(...args)
      }, milliseconds)
    },
    [func, milliseconds]
  )

  useEffect(() => {
    return clearTimeoutFunc
  }, [])

  return debouncedFunc
}
