"use client"

import type React from "react"

import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import ClientLayout from "./client-layout"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>BlogTube - Where words come to life</title>
        <meta name="description" content="A YouTube-inspired blog platform" />
      </head>
      <body className={cn(inter.className, "antialiased min-h-screen")}>
        {mounted && (
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            <div className="flex min-h-screen flex-col">
              <ClientLayout>{children}</ClientLayout>
            </div>
          </ThemeProvider>
        )}
      </body>
    </html>
  )
}



import './globals.css'

