import { Image } from "@/app/_components/widget/image/image"
import { Link } from "@/app/_components/widget/link/link"
import { Playground } from "@/app/_components/widget/playground/playground"
import { copyFile, createFolder, getFileName } from "@/app/_lib/serverUtils"
import type { MDXComponents } from "mdx/types"
import { HTMLAttributes, ImgHTMLAttributes, LinkHTMLAttributes } from "react"
import styles from "./mdx-components.module.css"
import { Padding } from "./app/_components/widget/padding/padding"

const markdownImageFolder = `public/images/markdown/`

const copyMarkdownImage = async (from: string) => {
  await createFolder(markdownImageFolder, { ignoreExist: true })
  const fileName = getFileName(from)
  const to = `${markdownImageFolder}${fileName}`

  await copyFile(from, to)

  // Hint: nextjs public folder path is without public/
  const src = to.replace("public/", "")
  return src
}

const components: MDXComponents = {
  img: async (props: ImgHTMLAttributes<HTMLImageElement>) => {
    // TODO: click to zoom
    const path = (props.src as string).replace("@/", "")
    const newPath = await copyMarkdownImage(path)
    if (!props.alt) throw new Error(`Image alt doesn't exist: ${props.src}`)

    return (
      <Image
        width={300}
        height={300}
        alt={props.alt}
        src={newPath}
        canZoom={true}
      />
    )
  },
  a: (props: LinkHTMLAttributes<HTMLLinkElement>) => {
    return (
      <Link href={props.href as string} cssClasses={styles.link}>
        {props.children}
      </Link>
    )
  },
  p: (props: HTMLAttributes<HTMLParagraphElement>) => {
    return <Padding direction="vertical">{props.children}</Padding>
  },
  Playground: Playground,
} satisfies MDXComponents

export const useMDXComponents = (): MDXComponents => {
  return components
}
