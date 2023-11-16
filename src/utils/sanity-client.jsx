import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
  projectId: 'ooiugsey',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}

export async function getProjects() {
  const projects = await client.fetch('*[_type == "project"]')
  return projects
}

export async function getProjectData(slug) {
  console.log(slug)
  const projects = await client.fetch(`*[_type == "project" && slug.current == ${slug}]`)
  return projects
}

// export async function getPosts() {
//   const posts = await client.fetch('*[_type == "post"]')
//   return posts
// }