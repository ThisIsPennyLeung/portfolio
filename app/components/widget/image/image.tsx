import { CssClassesType, joinCss } from "@/app/lib/utils"
import ExportedImage from "next-image-export-optimizer"
import { ComponentProps } from "react"
import styles from "./image.module.css"

export const Image = ({
  cssClasses,
  ...attribute
}: ComponentProps<typeof ExportedImage> & {
  cssClasses?: CssClassesType
}) => {
  return (
    <ExportedImage
      {...attribute}
      className={joinCss(cssClasses, styles.root)}
    />
  )
}
