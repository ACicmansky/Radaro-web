import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { Testimonials } from "@/components/Testimonials"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { ProjectSection } from "@/components/ProjectSection"
import { LogoVisibilityProvider } from "@/contexts/LogoVisibilityContext"

const Home = () => (
  <main className="min-h-screen">
    <LogoVisibilityProvider>
      <Navigation />
      <HeroSection />
    </LogoVisibilityProvider>
    <About />
    <ProjectSection />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
  </main>
);

export default Home;

