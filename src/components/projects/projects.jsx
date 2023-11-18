import { For, createResource, createSignal, onMount } from "solid-js";
import ProjectCard from "../projectCard/projectCard";
import styles from './projects.module.css'
import { data } from "../../App";

export default function Projects() {

  let projectsRef
  let scrollContentRef
  let projectsTrack

  const getScrollPercent = () => {

    var h = projectsRef, 
    b = scrollContentRef,
    st = 'scrollTop',
    sh = 'scrollHeight';

    const percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    return percent
  }

  onMount(() => {


    projectsRef.addEventListener("scroll", (e) => {
      // console.log(e)
      projectsTrack.style.translate = `-${getScrollPercent()}% 0`
      console.log(getScrollPercent())
    })
  })

  return (
    <section class={styles.projects} ref={projectsRef}>
      <div class={styles.projectsContainer} ref={scrollContentRef}>
        <div class={styles.projectsTrack} ref={projectsTrack}>
          <For each={data()}>{(project, i) => 
            <ProjectCard 
              title={project.title}
              subtitle={project.subtitle}
              image={project.thumbnail}
              summary={project.summary}
              slug={project.slug.current}
              index={i}
            />
          }
          </For>
        </div>
      </div>
    </section>
  )
}