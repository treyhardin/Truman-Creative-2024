import { A, useParams } from "@solidjs/router";
import { client, urlFor } from "../../utils/sanity-client";
import { Show, Suspense, createResource, createSignal, onMount } from "solid-js";
import styles from './project.module.css'
import Icon from "../../utils/icons";

export default function Project() {

  const [ otherProjects, setOtherProjects ] = createSignal([])

  const params = useParams();

  const getProjectData = async (slug) => {
    const projectData = await client.fetch(`*[_type == "project" && slug.current == '${slug}'][0]`)
    return projectData
  }

  const getOtherProjects = async (slug) => {
    const otherProjects = await client.fetch(`*[_type == "project" && slug.current != '${slug}'][0]`)
    return otherProjects
  }

  setOtherProjects(getOtherProjects())

  const [ data ] = createResource(() => params.slug, getProjectData)

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Show when={data()}>
          <div class={styles.project}>
            <img 
              src={urlFor(data().thumbnail).url()} 
              class={styles.projectImage}
            />
            <div class={styles.projectInfo}>
              <div class={styles.backLinkWrapper}>
                <A href="/" class={styles.backLink}>
                  <Icon glyph="arrowBack" />
                  <p class="utility">All Projects</p>
                </A>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 687 10" fill="none">
                  <path d="M0 5H687" stroke="white" stroke-width="0.5" stroke-dasharray="18 2"/>
                </svg>
              </div>
              <h1 class="h3">{data().title}</h1>
              <p>{data().summary}</p>
            </div>
          </div>
        </Show>
      </Suspense>
    </>
  )
}