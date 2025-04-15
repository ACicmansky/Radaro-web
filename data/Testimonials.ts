export interface Testimonial {
  name: string
  position: string
  quote: string
}

export const testimonials: Testimonial[] = [
    {
      name: "Peter Novák",
      position: "Developerská spoločnosť XYZ",
      quote: "Tím RADARO nám poskytol vynikajúcu podporu pri našom projekte. Ich odbornosť a pozornosť k detailom výrazne prispeli ku kvalite finálneho produktu."
    },
    {
      name: "Jana Kováčová",
      position: "Majiteľka nehnuteľnosti",
      quote: "Technická obhliadka od RADARO odhalila viacero problémov, ktoré by nás neskôr stáli tisíce eur. Vysoko odporúčam ich služby každému, kto uvažuje o kúpe nehnuteľnosti."
    },
    {
      name: "Michal Svoboda",
      position: "Stavebná firma ABC",
      quote: "Spolupráca s Ing. Kramárom bola vždy profesionálna. Jeho expertíza a skúsenosti sú neoceniteľné pre úspešné dokončenie náročných projektov."
    }
  ]