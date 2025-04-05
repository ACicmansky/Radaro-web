import { Navigation } from "@/components/Navigation"
import { ProjectCard } from "@/components/ProjectCard"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
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
    <main className="min-h-screen bg-gray-100 pt-16">
      <Navigation />
      <About />
      <section id="projects" className="container mx-auto px-4 py-8 pt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projekty</h2>
        <ProjectCard projects={projects} />
      </section>
      <Services />
      <Footer />
    </main>
  )
}

