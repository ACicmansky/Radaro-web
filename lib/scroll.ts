export const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const navHeight = 64 // Approximate height of the navigation bar
      const offset = section.offsetTop - navHeight
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      })
    }
  }