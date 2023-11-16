import { For, createSignal } from "solid-js";
import ProjectCard from "../projectCard/projectCard";
import { getProjects } from "../../utils/sanity-client";
import styles from './projects.module.css'

export default function Projects() {

  const [ projects, setProjects ] = createSignal([]);

  const fetchProjects = async () => {
    console.log(await getProjects())
    setProjects(await getProjects());
  }

  fetchProjects();

  return (
    <section class={styles.projects}>
      <For each={projects()}>{(project, i) => 
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
    </section>
  )
}