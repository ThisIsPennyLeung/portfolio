import { Card } from "@/app/_components/widget/card/card"
import { Link } from "@/app/_components/widget/link/link"
import { Padding } from "@/app/_components/widget/padding/padding"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./biography.module.css"

const Github = () => (
  <Link href="https://github.com/ThisIsPennyLeung/portfolio" target="blank">
    <FontAwesomeIcon icon={faGithub} /> Github
  </Link>
)

const Site = () => (
  <Link href="https://ThisIsPennyLeung.dev">
    <FontAwesomeIcon icon={faGlobe} /> This Blog
  </Link>
)

export const Biography = () => {
  const items = [
    { key: "name", content: <h3>Penny Leung</h3> },
    { key: "tagline", content: <span>From Legacy To Modern</span> },
    { key: "empty", content: <></> },
    { key: "github", content: <Github /> },
    { key: "site", content: <Site /> },
  ]

  return (
    <Card cssClasses={styles.root}>
      {items.map((item) => (
        <Padding key={item.key} direction="vertical">
          {item.content}
        </Padding>
      ))}
    </Card>
  )
}
