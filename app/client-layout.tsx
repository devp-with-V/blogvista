"use client"

import type React from "react"

import Header from "@/components/header"
import { SidebarProvider } from "@/context/sidebar-context"
import { AuthProvider } from "@/context/auth-context"

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SidebarProvider>
        <Header />
        <main className="flex-1">{children}</main>
      </SidebarProvider>
    </AuthProvider>
  )
}

export default ClientLayout

