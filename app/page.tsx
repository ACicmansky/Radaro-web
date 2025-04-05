import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { ProjectCard } from "@/components/ProjectCard"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { Testimonials } from "@/components/Testimonials"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
  const projects = [
    {
      title: "Slnečnice C",
      imageSrc: "/images/slnecnice/main.jpg",
      description:
        "Slnečnice C je rezidenčný developerský projekt nachádzajúci sa v Bratislave. Projekt ponúka moderné byty s kvalitným spracovaním a vybavením. Náš tím poskytoval komplexné služby stavebného dozoru a kontroly kvality počas celého procesu vývoja.",
      images: [
        "/images/slnecnice/1.jpg",
        "/images/slnecnice/2.jpg",
        "/images/slnecnice/3.jpg",
        "/images/slnecnice/4.jpg",
        "/images/slnecnice/5.jpg",
        "/images/slnecnice/6.jpg",
      ],
    },
    {
      title: "Arboria TT",
      imageSrc: "/images/arboria/main.jpg",
      description:
        "Arboria TT je polyfunkčný komplex v Trnave s bytovými jednotkami a obchodnými priestormi. Poskytli sme služby projektového manažmentu zabezpečujúce včasné dokončenie a dodržiavanie štandardov kvality.",
      images: [
        "/images/arboria/1.jpg",
        "/images/arboria/2.jpg",
        "/images/arboria/3.jpg",
        "/images/arboria/4.jpg",
        "/images/arboria/5.jpg",
        "/images/arboria/6.jpg",
      ],
    },
    {
      title: "MK",
      imageSrc: "/images/mk/main.jpg",
      description:
        "Projekt MK zahŕňal obnovu a modernizáciu existujúcej stavby. Náš tím vykonal dôkladné technické kontroly a zabezpečil dozor počas celého procesu rekonštrukcie.",
      images: [
        "/images/mk/1.jpg",
        "/images/mk/2.jpg",
        "/images/mk/3.jpg",
        "/images/mk/4.jpg",
        "/images/mk/5.jpg",
        "/images/mk/6.jpg",
      ],
    },
    {
      title: "CGII",
      imageSrc: "/images/cgii/main.jpg",
      description:
        "CGII je komerčný development s kancelárskymi priestormi a maloobchodnými jednotkami. Poskytli sme komplexné audity kvality a služby dodržiavania predpisov, aby sme zabezpečili, že projekt spĺňa všetky požadované štandardy.",
      images: [
        "/images/cgii/1.png",
        "/images/cgii/2.png",
        "/images/cgii/3.jpg",
        "/images/cgii/4.jpg",
        "/images/cgii/5.jpg",
        "/images/cgii/6.jpg",
      ],
    },
    {
      title: "Ovocné sady",
      imageSrc: "/images/ovocnesady/main.jpg",
      description:
        "Ovocné sady sú rezidenčný komunitný development so zameraním na udržateľnosť a zelené plochy. Náš tím riadil projekt od počiatočného plánovania až po dokončenie, zabezpečenie vysokej kvality výstavby a dodržiavanie environmentálnych noriem.",
      images: [
        "/images/ovocnesady/1.jpg",
        "/images/ovocnesady/2.jpg",
        "/images/ovocnesady/3.jpg",
        "/images/ovocnesady/4.jpg",
        "/images/ovocnesady/5.jpg",
        "/images/ovocnesady/6.jpg",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <About />
      <section id="projects" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Naše projekty</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Prezrite si naše úspešne dokončené projekty
            </p>
          </div>
          <ProjectCard projects={projects} />
        </div>
      </section>
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

