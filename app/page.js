import {
  Contact,
  Experience,
  Footer,
  GoToTop,
  Home,
  Info,
  Nav,
  Projects,
  Services,
  Skills,
  Testimonials,
} from '@/components';

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <Nav />
      <Home />
      <Info />
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <Experience />
      <Contact />
      <GoToTop />
      <Footer />
    </main>
  );
}
