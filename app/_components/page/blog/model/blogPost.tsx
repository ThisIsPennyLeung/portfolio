import { ReactNode } from "react"

export interface BlogPost {
  order: number
  slug: string
  title: string
  summary: string
  content: ReactNode
}
