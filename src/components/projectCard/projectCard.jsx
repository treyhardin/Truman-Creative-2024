import Icon from '../../utils/icons';
import { urlFor } from '../../utils/sanity-client'
import styles from './projectCard.module.css'
import { A } from "@solidjs/router";

export default function ProjectCard({ title, subtitle, image, summary, slug, index }) {
  return (
    <A href={`projects/${slug}`} class={styles.projectCard}>
      <p>Text</p>
      <img 
        src={urlFor(image).width(600).height(800).url()} 
        class={styles.projectImage}
      />
      <div class={styles.projectInfo}>
        <div class={styles.projectTitle}>
          <p class="h2">{title}</p>
        </div>
        <div class={styles.projectSubtitle}>
          <Icon glyph="star" />
          <p class="utility">{subtitle}</p>
          <Icon glyph="star" />
        </div>
        <p class="utility">{summary}</p>
      </div>
    </A>
  )
}