import Icon from '../../utils/icons'
import styles from './footer.module.css'

export default function Footer() {

  return (
    <section>
      <div class={styles.footerNav}>
        <a href="#" class="utility">Github</a>
        <Icon glyph="star" />
        <a href="#" class="utility">Instagram</a>
        <Icon glyph="star" />
        <a href="#" class="utility">LinkedIn</a>
        <Icon glyph="star" />
        <a href="#" class="utility">Founded by: Trey Hardin</a>
      </div>
    </section>
  )
}