import { Card } from "@/app/_components/widget/card/card"
import { List } from "@/app/_components/widget/list/list"
import { getBlogsGroupByTags } from "@/app/_lib/fetch/blogPost"
import styles from "./tag.module.css"

export const Tag = async () => {
  const byTags = await getBlogsGroupByTags()
  const tags = Object.keys(byTags)

  return (
    <Card cssClasses={styles.root}>
      <List>
        <span>Tag</span>
        {/* FIXME: tag link */}
        {tags.map((x) => (
          <span key={x}>#{x}</span>
        ))}
      </List>
    </Card>
  )
}
