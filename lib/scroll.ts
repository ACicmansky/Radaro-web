export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    // Define nav heights for desktop and mobile
    const DESKTOP_NAV_HEIGHT = 110; // px
    const MOBILE_NAV_HEIGHT = 90; // px 
    // Use matchMedia to detect mobile breakpoint (Tailwind's md: 768px)
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const navHeight = isMobile ? MOBILE_NAV_HEIGHT : DESKTOP_NAV_HEIGHT;
    const rect = section.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const offset = rect.top + scrollTop - navHeight;
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });
  }
};