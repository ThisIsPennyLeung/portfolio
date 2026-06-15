import { BlogDetail } from "@/app/components/page/blog/detail/blogDetail"
import { BlogPost } from "@/app/components/page/blog/model/blogPost"
import { Card } from "@/app/components/widget/card/card"
import { Link } from "@/app/components/widget/link/link"
import { joinCss } from "@/app/lib/utils"
import styles from "./blogListItem.module.css"

export const BlogListItem = ({ blogPost }: { blogPost: BlogPost }) => {
  if (!blogPost) throw new Error("BlogListItem: blogPost is undefined")

  return (
    <Link
      href={`/blog/${blogPost.slug}`}
      cssClasses={joinCss(styles.root, styles.link)}
    >
      <Card>
        <article>
          <BlogDetail blogPost={blogPost} />
        </article>
      </Card>
    </Link>
  )
}
