import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Instrument_Serif } from "next/font/google"
import "./globals.css"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
})

export const metadata: Metadata = {
  title: "Premium Shadcn Dashboard Templates",
  description: "Premium shadcn dashboard templates, save weeks of time.",
  icons: {
    icon: "favicon.ico",
  },
}
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} ${instrumentSerif.variable}`}>{children}</body>
    </html>
  )
}
