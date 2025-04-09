"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Sidebar from "@/components/sidebar"
import { ThumbsUp } from "lucide-react"

// Mock data for liked blogs
const likedBlogs = [
  {
    id: 3,
    title: "Why TypeScript is Taking Over Frontend Development",
    coverImage: "/placeholder.svg?height=180&width=320",
    likedAt: "2 days ago",
    author: {
      name: "CodeCrafter",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 7,
    title: "Mastering CSS Grid Layout",
    coverImage: "/placeholder.svg?height=180&width=320",
    likedAt: "1 week ago",
    author: {
      name: "CSSWizard",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 10,
    title: "Optimizing React Performance",
    coverImage: "/placeholder.svg?height=180&width=320",
    likedAt: "2 weeks ago",
    author: {
      name: "ReactPro",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
]

export default function LikedPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev)
  }

  return (
    <div className="flex">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className="flex-1 p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-6">Liked Blogs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedBlogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.id}`} className="group">
              <div className="rounded-md overflow-hidden border bg-card transition-all hover:shadow-md">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={blog.coverImage || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-background/80 p-1 rounded-full">
                    <ThumbsUp className="h-4 w-4 fill-primary text-primary" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold line-clamp-2">{blog.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={blog.author.avatar} />
                      <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{blog.author.name}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Liked {blog.likedAt}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {likedBlogs.length === 0 && (
          <div className="text-center py-12">
            <ThumbsUp className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">No liked blogs yet</h2>
            <p className="text-muted-foreground">Like blogs by clicking the thumbs up icon</p>
          </div>
        )}
      </div>
    </div>
  )
}

