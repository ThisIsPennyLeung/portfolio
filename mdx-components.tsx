import { Image } from "@/app/_components/widget/image/image"
import { Link } from "@/app/_components/widget/link/link"
import { Playground } from "@/app/_components/widget/playground/playground"
import { getImageAsBase64 } from "@/app/_lib/serverUtils"
import type { MDXComponents } from "mdx/types"
import { ImgHTMLAttributes, LinkHTMLAttributes } from "react"
import styles from "./mdx-components.module.css"

const components: MDXComponents = {
  img: async (props: ImgHTMLAttributes<HTMLImageElement>) => {
    // FIXME: turbopack can't dynamic import image
    // TODO: click to zoom
    const image = await getImageAsBase64(
      (props.src as string).replace("@", process.cwd())
    )
    return <Image width={300} height={300} alt={props.alt || ""} src={image} />
  },
  a: (props: LinkHTMLAttributes<HTMLLinkElement>) => {
    return (
      <Link href={props.href as string} cssClasses={styles.link}>
        {props.children}
      </Link>
    )
  },
  Playground: Playground,
} satisfies MDXComponents

export const useMDXComponents = (): MDXComponents => {
  return components
}
