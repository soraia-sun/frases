import type { Metadata } from "next"
import "@/app/ui/globals.css"
import { ubuntu } from "@/app/ui/fonts"


export const metadata: Metadata = {
  title: "Gerador de Frases",
  description: "Gerador de frases em bilhetes numerados.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
