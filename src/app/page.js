import {
  Hero,
  Testimonial,
  About,
  Services,
  // Navbar,
  // Header,
  // Footer,
  // ContactUs,
} from "../components/landingPage";

export default function Home() {
  return (
    <main>
      {/* Header section  */}

      {/* hero section  */}
      <section id="Hero">
        <Hero />
      </section>
      {/* about section  */}
      <section id="About">
        <About />
      </section>
      {/* services section  */}
      <section id="Services">
        <Services />
      </section>
      {/* testimonials section  */}
      <section id="Testimonials" style={{ paddingTop: '60px', marginTop: '-60px' }} >
        <Testimonial />
      </section>
    </main>
  );
}
