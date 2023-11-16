import './App.css'
import Hero from './components/hero/hero'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'
import Lenis from '@studio-freight/lenis'
import { Router, Routes, Route } from "@solidjs/router"; // 👈 Import the router
import Project from './routes/project/project'
import Home from './routes/home'

function App() {

  const lenis = new Lenis({})

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <div class="App">
      <Router>
        <Routes>
          <Route path="/" component={Home}></Route>
          <Route path="/projects/:slug" component={Project}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
