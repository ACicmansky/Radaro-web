export type NavItem = {
  label: string
  section: string
  isCta?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { label: "O nás", section: "about" },
  { label: "Projekty", section: "projects" },
  { label: "Služby", section: "services" },
  { label: "Referencie", section: "testimonials" },
  { label: "Kontakt", section: "contact", isCta: true }
]
