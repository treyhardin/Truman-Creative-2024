import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Lenis from '@studio-freight/lenis'
import { Router, Routes, Route } from "@solidjs/router"; // 👈 Import the router
import Project from './routes/project/project'
import Home from './routes/home/home'
import { Show, Suspense, createResource, createSignal, lazy } from 'solid-js'
import { getProjects } from './utils/sanity-client'
import Preloader from './components/preloader/preloader'

export const [ data ] = createResource(getProjects)

function App() {

  // const lenis = new Lenis({})

  // lenis.on('scroll', (e) => {
  //   console.log(e)
  // })

  // function raf(time) {
  //   lenis.raf(time)
  //   requestAnimationFrame(raf)
  // }

  // requestAnimationFrame(raf)

  return (
    <Router>
      <div class="App">
        <Preloader />
        {/* <Show when={!data.loading} fallback={Preloader}> */}
          <Header />
          <Routes>
            <Route path="/" component={Home}></Route>
            <Route path="/projects" component={Home}></Route>
            <Route path="/projects/:slug" component={Project}></Route>
          </Routes>
        {/* <Footer /> */}
        {/* </Show> */}
      </div>
    </Router>
  )
}

export default App
