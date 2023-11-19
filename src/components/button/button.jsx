import Icon from '../../utils/icons'
import styles from './button.module.css'

export default function Button( props ) {

  

  return (
    <a class={styles.button} href={props.url} target='_blank'>
      <div class={styles.buttonText}>
        <Icon glyph="star" />
        <p class="utility">{props.text}</p>
      </div>
      <div class={styles.buttonLines}>
        <span class={styles.buttonLine}></span>
        <span class={styles.buttonLine}></span>
        <span class={styles.buttonLine}></span>
      </div>
    </a>
  )
}