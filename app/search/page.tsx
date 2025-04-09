"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Sidebar from "@/components/sidebar"

// Mock data for search results
const allBlogs = [
  {
    id: 1,
    title: "10 Next.js Features You Should Use in 2024",
    excerpt: "Discover the most powerful features that Next.js 14 brings to modern web development...",
    coverImage: "/placeholder.svg?height=180&width=320",
    createdAt: "3 days ago",
    views: "12K",
    author: {
      name: "TechInsider",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 2,
    title: "The Ultimate Guide to Content Creation",
    excerpt: "Learn how to create engaging content that resonates with your audience and drives traffic...",
    coverImage: "/placeholder.svg?height=180&width=320",
    createdAt: "1 week ago",
    views: "45K",
    author: {
      name: "ContentMaster",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 3,
    title: "Why TypeScript is Taking Over Frontend Development",
    excerpt: "TypeScript has been gaining tremendous popularity among frontend developers. Here's why...",
    coverImage: "/placeholder.svg?height=180&width=320",
    createdAt: "2 weeks ago",
    views: "89K",
    author: {
      name: "CodeCrafter",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  // More blogs...
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev)
  }

  useEffect(() => {
    // Simulate search results
    if (query) {
      const results = allBlogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(query.toLowerCase()),
      )
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [query])

  return (
    <div className="flex">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className="flex-1 p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-2">Search Results</h1>
        <p className="text-muted-foreground mb-6">
          {searchResults.length} results for "{query}"
        </p>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {searchResults.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.id}`} className="group">
                <div className="rounded-md overflow-hidden border bg-card transition-all hover:shadow-md p-4">
                  <div className="flex gap-4">
                    <div className="w-40 h-24 relative rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={blog.coverImage || "/placeholder.svg"}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{blog.title}</h3>
                      <div className="text-sm text-muted-foreground mb-2">
                        <span>{blog.views} views</span>
                        <span className="mx-1">•</span>
                        <span>{blog.createdAt}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={blog.author.avatar} />
                          <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{blog.author.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{blog.excerpt}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No results found for "{query}"</p>
            <p className="text-sm mt-2">Try different keywords or check your spelling</p>
          </div>
        )}
      </div>
    </div>
  )
}

