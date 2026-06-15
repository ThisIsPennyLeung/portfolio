import { Card } from "@/app/components/widget/card/card"
import { ListAndSummaryLayout } from "@/app/components/widget/listAndSummaryLayout/listAndSummaryLayout"
import { ReactNode } from "react"

const Summary = () => {
  return <Card>Summary</Card>
}

const Layout = ({ children }: { children: ReactNode }) => {
  return <ListAndSummaryLayout list={children} summary={<Summary />} />
}
export default Layout
