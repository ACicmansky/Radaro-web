import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { Testimonials } from "@/components/Testimonials"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { ProjectSection } from "@/components/ProjectSection"

const Home = () => (
  <main className="min-h-screen">
    <Navigation />
    <HeroSection />
    <About />
    <ProjectSection />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
  </main>
);

export default Home;

