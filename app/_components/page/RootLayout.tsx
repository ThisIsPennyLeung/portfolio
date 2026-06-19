import { Biography } from "@/app/_components/page/blog/biography/biography"
import { Tag } from "@/app/_components/page/blog/tag/tag"
import { BlogLayout } from "@/app/_components/widget/blogLayout/blogLayout"
import { List } from "@/app/_components/widget/list/list"
import { ReactNode } from "react"

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <BlogLayout
      biography={<Biography />}
      blogPosts={<List>{children}</List>}
      tag={<Tag />}
    />
  )
}
