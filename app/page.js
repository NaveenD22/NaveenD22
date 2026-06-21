import {
  Contact,
  Experience,
  Footer,
  GoToTop,
  Home,
  Info,
  Nav,
  Process,
  Projects,
  Services,
  Skills,
  Testimonials,
  ScrollProgress,
  Cursor,
} from '@/components';

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <ScrollProgress />
      <Cursor />
      <Nav />
      <Home />
      <Process />
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
