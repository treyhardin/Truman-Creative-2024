import styles from './hero.module.css'

export default function Hero() {
  return (
    <section class={styles.hero}>

      <div class={styles.heroText}>
        <div class={styles.heroTitle}>
          <h1 class="h6">Truman Creative, LLC.</h1>
        </div>
        <div class={styles.heroInfo}>
          <h2 class="utility">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
      </div>

      <div class={styles.heroBorder}>
        <p class="utility">Est. 2020</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 687 10" fill="none">
          <path d="M0 5H687" stroke="white" stroke-width="0.5" stroke-dasharray="18 2"/>
        </svg>
      </div>
    </section>
  )
}