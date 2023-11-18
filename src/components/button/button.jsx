import Icon from '../../utils/icons'
import styles from './button.module.css'

export default function Button({ text, url }) {

  const handleClick = () => {
    window.open(url, '_blank');
  }

  return (
    <button  onClick={handleClick}>
      <div class={styles.buttonText}>
        <Icon glyph="star" />
        <p class="utility">{text}</p>
      </div>
      <div class={styles.buttonLines}>
        <span class={styles.buttonLine}></span>
        <span class={styles.buttonLine}></span>
        <span class={styles.buttonLine}></span>
      </div>
    </button>
  )
}