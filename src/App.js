import React, { useEffect } from 'react';


import {Contact, Experience, Footer, GoToTop, Home, Info, Nav, Projects, Skills, Testimonials} from './components'

function App() {


    useEffect(() => {
      window.addEventListener('beforeunload', handleBeforeUnload)
      return () => window.removeEventListener('beforeunload', handleBeforeUnload)
    }, [])

  function handleBeforeUnload() {
    document.title = 'Come Back To MyPortFolio'
  }

  return (
    <div className="App scroll-smooth ">
      
      <Nav/>
      <Home/>
      <Info/>
      <Skills/>
      <Projects/>
      <Testimonials/> 
      <Experience/>
      <Contact/>
      <GoToTop/>
      <Footer/>
    
    </div>
  );
}

export default App;
