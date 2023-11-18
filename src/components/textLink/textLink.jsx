import Icon from "../../utils/icons";
import styles from './textLink.module.css'

export default function TextLink({text, url}) {
  return (
    <a href={url} target="_blank" class={styles.textLink}>
      <p class="utility">{text}</p>
      <Icon glyph="arrowDiagonal" />
    </a>
  )
}