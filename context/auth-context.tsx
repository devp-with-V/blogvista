"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  email: string
  name: string
  avatar?: string
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock users for testing
const MOCK_USERS = [
  {
    id: "1",
    email: "demo@blogtube.com",
    password: "password123",
    name: "Demo User",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    email: "admin@blogtube.com",
    password: "admin123",
    name: "Admin User",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Find user in mock data
      const foundUser = MOCK_USERS.find((u) => u.email === email && u.password === password)

      if (!foundUser) {
        throw new Error("Invalid credentials")
      }

      // Create user object without password
      const { password: _, ...userWithoutPassword } = foundUser

      // Store user in state and localStorage
      setUser(userWithoutPassword)
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))

      // Redirect to home page
      router.push("/")
    } catch (error) {
      console.error("Login error:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signup = async (email: string, password: string, name: string) => {
    setLoading(true)
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check if user already exists
      if (MOCK_USERS.some((u) => u.email === email)) {
        throw new Error("User already exists")
      }

      // Create new user
      const newUser = {
        id: String(MOCK_USERS.length + 1),
        email,
        name,
        avatar: "/placeholder.svg?height=100&width=100",
      }

      // Store user in state and localStorage
      setUser(newUser)
      localStorage.setItem("user", JSON.stringify(newUser))

      // Redirect to home page
      router.push("/")
    } catch (error) {
      console.error("Signup error:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

