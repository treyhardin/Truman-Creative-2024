import { A, useLocation, useParams } from "@solidjs/router";
import { client, urlFor } from "../../utils/sanity-client";
import { For, Show, Suspense, createEffect, createResource, createSignal, onMount } from "solid-js";
import styles from './project.module.css'
import Icon from "../../utils/icons";
import Button from "../../components/button/button";
import TextLink from "../../components/textLink/textLink";
import { data } from "../../App";

export default function Project() {

  const [ currentProject, setCurrentProject ] = createSignal(null)
  const [ otherProjects, setOtherProjects ] = createSignal(null)
  const [ lightboxActive, setLightboxActive ] = createSignal(false)

  let projectRef
  let videoPlayerRef
  let videoAutoplayRef
  

  const sortProjects = () => {

    const params = useParams();

    const otherProjects = []

    if (data()) {
      data().map((project) => {
        if (project.slug.current == params.slug) {
          setCurrentProject(project)
        } else {
          otherProjects.push(project)
        }
      })
      setOtherProjects(otherProjects)
    }
  }

  createEffect(() => {
    sortProjects()
  })

  const openLightbox = () => {
    setLightboxActive(true)
    videoPlayerRef.play()
  }

  const closeLightbox = () => {
    setLightboxActive(false)
  }

  onMount(() => {
    // console.log(videoAutoplayRef)
    // videoAutoplayRef.addEventListener('loadedmetadata', consolelog('hi'))
  })

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Show when={currentProject()}>

          {/* Lightbox */}
          <Show when={lightboxActive() && currentProject().videoURL}>
            <div class={styles.lightbox}>
              <div class={styles.lightboxHeader}>
                <button class={styles.lightboxCloseButton} onClick={closeLightbox}>
                  <Icon glyph="star" />
                </button>
              </div>
              <video class={styles.videoPlayer} ref={videoPlayerRef} controls>
                <source type="video/mp4" src={currentProject().videoURL} />
                {/* <source type="video/quicktime" src={currentProject().videoURL} /> */}
              </video>
              <p class="utility">{currentProject().title}</p>
            </div>
          </Show>

          {/* Page Content */}
          <div class={styles.project} ref={projectRef}>

            {/* Project Media */}
            <div class={styles.projectImageWrapper}>

              <Show when={currentProject().videoURL}>
                <button class={styles.playButton} onClick={openLightbox}>
                  <Icon glyph="star" />
                  <p class="utility">Play Video</p>
                </button>
              </Show>

              <Show when={currentProject().videoAutoplayURL}>
                <video class={styles.videoAutoplay} autoplay muted loop >
                  <source type="video/mp4" src={currentProject().videoAutoplayURL} />

                  {/* <source type="video/quicktime" src={currentProject().videoAutoplayURL} /> */}
                  {/* <img 
                    src={urlFor(currentProject().mainImage).width(1200).height(1000).url()} 
                    class={styles.projectImage}
                  /> */}
                </video>
              </Show>

              <img 
                src={urlFor(currentProject().mainImage).width(1200).height(1000).url()} 
                class={styles.projectImage}
              />

              <div class={styles.subtitle}>
                <Icon glyph="star" />
                <p class="utility">{currentProject().subtitle}</p>
              </div>

            </div>

            {/* Project Info */}
            <div class={styles.projectInfo}>

              <div class={styles.infoHeader}>

                {/* Title */}
                <div class={styles.title}>
                  <h1 class="h1">{currentProject().title}</h1>
                </div>

                {/* Tags */}
                <div class={styles.tagWrapper}>
                  <For each={currentProject().tags}>{(tag, i) =>
                    <span class={styles.projectTag} key={i()}>
                      <p class="utility">{tag.title}</p>
                    </span>
                  }</For>
                </div>

                {/* Summary */}
                <p class={styles.summary}>{currentProject().summary}</p>

              </div>

              <div class={styles.infoContent}>

                {/* Description */}
                <div class={styles.description}>
                  <p class="utility">{currentProject().description}</p>
                </div>

                {/* Button */}
                <Show when={currentProject().buttonText && currentProject().buttonURL}>
                  <Button
                    text={currentProject().buttonText}
                    url={currentProject().buttonURL}
                  />
                </Show>

                {/* Links */}
                <Show when={currentProject().links}>
                  <div class={styles.projectLinks}>
                    <For each={currentProject().links}>{(link, i) =>
                      <TextLink 
                        text={link.label}
                        url={link.URL}
                      />
                    }</For>
                  </div>
                </Show>

                {/* Other Projects */}
                <div class={styles.otherProjectsWrapper}>
                  <p class="utility">Other Projects:</p>
                  <For each={otherProjects()}>{(project, i) => 
                    <A class={styles.otherProjectItem} href={`/projects/${project.slug.current}`} onClick={() => projectRef.scrollTo(0, 0)}>
                      <div class={styles.otherProjectText}>
                        <h3>{project.title}</h3>
                        <p class="utility">{project.subtitle}</p>
                      </div>
                      <Icon glyph="arrowDiagonal" />
                    </A>
                  }</For>
                </div>

              </div>

            </div>
          </div>
        </Show>
      </Suspense>
    </>
  )
}