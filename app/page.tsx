import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { Testimonials } from "@/components/Testimonials"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Projects } from "@/components/Projects"
import { LogoVisibilityProvider } from "@/contexts/LogoVisibilityContext"

const Home = () => (
  <main className="min-h-screen">
    <LogoVisibilityProvider>
      <Navigation />
      <Hero />
    </LogoVisibilityProvider>
    <About />
    <Projects />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
  </main>
);

export default Home;

