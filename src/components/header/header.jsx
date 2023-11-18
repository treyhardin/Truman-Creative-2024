import { For, Show, createSignal } from 'solid-js'
import styles from './header.module.css'
import { urlFor } from '../../utils/sanity-client'
import { A } from '@solidjs/router'
import Icon from '../../utils/icons'
import { data } from '../../App'

export default function Hero() {

  const [ menuOpen, setMenuOpen ] = createSignal(false)

  const hideMenu = () => {
    setMenuOpen(false)
  }

  const toggleMenu = async () => {
    setMenuOpen(!menuOpen())
  }


  return (

    <>

    <header class={`${styles.header} ${menuOpen() ? styles.menuOpen : ''}`}>

      <div class={styles.headerInner}>
        <button class={styles.menuButton} onClick={toggleMenu}>
          <div class={styles.menuCloseText}>
            <p class="utility">Close</p>
          </div>
          <div class={styles.hamburger}>
            <div class={styles.hamburgerLine} />
            <div class={styles.hamburgerLine} />
            <div class={styles.hamburgerLine} />
          </div>
          <div class={styles.menuOpenText}>
            <p class="utility">Menu</p>
          </div>
        </button>

        <div class={styles.headerContent}>
          <div class={styles.headerText}>
            <A class={styles.headerTitle} href="/" onClick={hideMenu}>
              <h1 class="h6">Truman Creative, LLC.</h1>
            </A>
            <div class={styles.headerInfo}>
              <h2 class="utility">Creative musings and explorations centered around the fusion between music, art, design & technology.</h2>
            </div>
          </div>

          <div class={styles.heroBorder}>
            <p class="utility">Est. 2020</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 687 10" fill="none">
              <path d="M0 5H687" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-width="1px" stroke-dasharray="18 2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* <Show when={menuOpen()}> */}
        <div class={styles.navigationMenu}>
          <nav class={styles.navProjects}>

            <For each={data()}>{(project, i) =>
              <A href={`/projects/${project.slug.current}`} onClick={hideMenu} class={styles.navProjectItem}>
                <img src={urlFor(project.thumbnail).width(400).height(500).url()} class={styles.navProjectImage} />
                <div class={styles.projectText}>
                  <p class="h3">{project.title}</p>
                <p class="utility">{project.subtitle}</p>
                </div>
                <Icon glyph="arrowDiagonal" />
              </A>
            }
            </For>
            
          </nav>
          <div class={styles.navInfo}>
            <p>Get in Touch</p>
            <div class={styles.contactLinks}>
              <a href="#" class={styles.link}>
                <p class="utility">GitHub</p>
                {/* <Icon glyph="arrowDiagonal" /> */}
              </a>
              <a href="#" class={styles.link}>
                <p class="utility">Instagram</p>
              </a>
              <a href="#" class={styles.link}>
                <p class="utility">LinkedIn</p>
              </a>
              <a href="#" class={styles.link}>
                <p class="utility">Link</p>
              </a>
            </div>
          </div>
        </div>
      {/* </Show> */}

    </header>

    </>
  )
}