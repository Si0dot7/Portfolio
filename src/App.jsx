import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Myself from './Components/Myself'
import NavBar from './Components/NavBar'
import Project from './Components/Project'
import Service from './Components/Service'
function App() {

  return (
    <main>
     <NavBar/>
     <Myself/>
     <About/>
     <Service/>
     <Project/>
     <Contact/>
    </main>
  )
}

export default App
