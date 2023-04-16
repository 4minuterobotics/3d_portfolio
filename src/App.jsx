import {useEffect} from "react"; 
import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks,
Hero, Navbar, Tech, Works, StarsCanvas} from './components'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const config = {
  rootMargin: '0px 0px 0px 0px',
  threshhold: 0,
}


const App = () => {

  useEffect (() => {
    let observer = new window.IntersectionObserver(function(entries, self) {
      // iterate over each
      console.log('entries: ', entries)
      entries.forEach((entry) => {
        // We will process images that are intersecting
        if (entry.isIntersecting) {
          // custom fuction that loads a component file
          loadSection(entry.target);
          // the component is now in place, stop watching
          self.unobserve(entry.target);
        }        
      });
    }, config);

    const components = document.querySelectorAll(".component")
    components.forEach((component) => {
      observer.observe(component);
    });

    return () => {
      components.forEach(component =>{
        observer.unobserve(component);
      });
    }
  }, []);

  
  // this happens when an element enters the viewport being observed
  const loadSection = (component) =>{
    console.log('loading component');
  }

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <ToastContainer position ="bottom-center" limit={1}/>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className ="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
