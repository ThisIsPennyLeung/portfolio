import { ListAndSummaryLayout } from "@/app/components/widget/listAndSummaryLayout/listAndSummaryLayout"
import { ReactNode } from "react"

const Summary = () => {
  return <div>Summary</div>
}

const Layout = ({ children }: { children: ReactNode }) => {
  return <ListAndSummaryLayout list={children} summary={<Summary />} />
}
export default Layout
