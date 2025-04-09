"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"
import { Bookmark, FolderPlus } from "lucide-react"

// Mock data for bookmarks
const bookmarks = [
  {
    id: 1,
    title: "10 Next.js Features You Should Use in 2024",
    coverImage: "/placeholder.svg?height=180&width=320",
    savedAt: "3 days ago",
    author: {
      name: "TechInsider",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 5,
    title: "The Future of AI in Content Creation",
    coverImage: "/placeholder.svg?height=180&width=320",
    savedAt: "1 week ago",
    author: {
      name: "AIExplorer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 8,
    title: "The Psychology of User Experience",
    coverImage: "/placeholder.svg?height=180&width=320",
    savedAt: "2 weeks ago",
    author: {
      name: "UXMind",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 3,
    title: "Why TypeScript is Taking Over Frontend Development",
    coverImage: "/placeholder.svg?height=180&width=320",
    savedAt: "1 month ago",
    author: {
      name: "CodeCrafter",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
]

export default function BookmarksPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev)
  }

  return (
    <div className="flex">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className="flex-1 p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Bookmarks</h1>
          <Button variant="outline" size="sm">
            <FolderPlus className="h-4 w-4 mr-2" />
            Create collection
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((bookmark) => (
            <Link key={bookmark.id} href={`/blog/${bookmark.id}`} className="group">
              <div className="rounded-md overflow-hidden border bg-card transition-all hover:shadow-md">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={bookmark.coverImage || "/placeholder.svg"}
                    alt={bookmark.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-background/80 p-1 rounded-full">
                    <Bookmark className="h-4 w-4 fill-primary text-primary" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold line-clamp-2">{bookmark.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={bookmark.author.avatar} />
                      <AvatarFallback>{bookmark.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{bookmark.author.name}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Saved {bookmark.savedAt}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {bookmarks.length === 0 && (
          <div className="text-center py-12">
            <Bookmark className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">No bookmarks yet</h2>
            <p className="text-muted-foreground">Save blogs to read later by clicking the bookmark icon</p>
          </div>
        )}
      </div>
    </div>
  )
}

