import { Biography } from "@/app/_components/page/blog/biography/biography"
import { Tag } from "@/app/_components/page/blog/tag/tag"
import { List } from "@/app/_components/widget/list/list"
import { ListAndSummaryLayout } from "@/app/_components/widget/listAndSummaryLayout/listAndSummaryLayout"
import { ReactNode } from "react"

const Summary = () => {
  return (
    <List>
      <Biography />
      <Tag />
    </List>
  )
}

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return <ListAndSummaryLayout list={children} summary={<Summary />} />
}
