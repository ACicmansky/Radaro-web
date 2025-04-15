"use client"

import { DesktopNavigation } from "@/components/navigation/DesktopNavigation"
import { MobileNavigation } from "@/components/navigation/MobileNavigation"

export function Navigation() {
  return (
    <>
      {/* Render mobile navigation */}
      <MobileNavigation />
      
      {/* Render desktop navigation */}
      <DesktopNavigation />
    </>
  )
}
