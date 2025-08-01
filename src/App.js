import React, { useEffect, lazy, Suspense } from 'react';

// Lazy load all components
const Nav = lazy(() => import('./components/Nav'));
const Home = lazy(() => import('./components/Home'));
const Info = lazy(() => import('./components/Info'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const GoToTop = lazy(() => import('./components/GoToTop'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  function handleBeforeUnload() {
    document.title = 'Come Back To MyPortFolio';
  }

  return (
    <div className="App scroll-smooth">
      <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
        <Nav />
        <Home />
        <Info />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <GoToTop />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;