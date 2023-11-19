import { data } from '../../App'
import Icon from '../../utils/icons'
import styles from './preloader.module.css'

export default function Preloader() {

  return (
    <div class={`${styles.preloader} ${!data.loading ? styles.hidden : null}`}>
      <div class={styles.preloaderContent}>
        <Icon glyph="star" />
          <p class="utility">Truman Creative, LLC.</p>
        <Icon glyph="star" />
      </div>
    </div>
  )
}