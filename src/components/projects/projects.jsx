import { For, createResource, createSignal, onMount } from "solid-js";
import ProjectCard from "../projectCard/projectCard";
import styles from './projects.module.css'
import { data } from "../../App";

export default function Projects() {

  let projectsRef
  let scrollContentRef
  let projectsTrack

  return (
    <section class={styles.projects} ref={projectsRef}>
      <div class={styles.projectsContainer} ref={scrollContentRef}>
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
    </section>
  )
}