import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RADARO - Profesionálne stavebné služby",
  description: "Profesionálne stavebné služby s dôrazom na kvalitu, efektivitu a inovácie. Stavebný dozor, technické poradenstvo a riadenie projektov.",
  icons: {
    icon: "/images/other/favicon.ico",
    shortcut: "/images/other/favicon.ico",
    apple: "/images/other/favicon.ico",
  },
  keywords: [
    "profesionálne stavebné služby",
    "stavebný dozor",
    "technické poradenstvo",
    "riadenie projektov",
    "stavebné služby",
    "stavebné dozor",
    "stavebné poradenstvo",
    "stavebné riadenie",
    "stavebné dozorové služby",
    "stavebné poradenstvo služby",
    "stavebné riadenie služby",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
