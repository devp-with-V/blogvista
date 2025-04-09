"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Sidebar from "@/components/sidebar"
import { Trash2 } from "lucide-react"

// Mock data for history
const historyData = {
  today: [
    {
      id: 1,
      title: "10 Next.js Features You Should Use in 2024",
      coverImage: "/placeholder.svg?height=180&width=320",
      timestamp: "2 hours ago",
      author: {
        name: "TechInsider",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 3,
      title: "Why TypeScript is Taking Over Frontend Development",
      coverImage: "/placeholder.svg?height=180&width=320",
      timestamp: "5 hours ago",
      author: {
        name: "CodeCrafter",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
  ],
  yesterday: [
    {
      id: 5,
      title: "The Future of AI in Content Creation",
      coverImage: "/placeholder.svg?height=180&width=320",
      timestamp: "Yesterday",
      author: {
        name: "AIExplorer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 7,
      title: "Mastering CSS Grid Layout",
      coverImage: "/placeholder.svg?height=180&width=320",
      timestamp: "Yesterday",
      author: {
        name: "CSSWizard",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
  ],
  pastWeek: [
    {
      id: 2,
      title: "The Ultimate Guide to Content Creation",
      coverImage: "/placeholder.svg?height=180&width=320",
      timestamp: "Last week",
      author: {
        name: "ContentMaster",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 8,
      title: "The Psychology of User Experience",
      coverImage: "/placeholder.svg?height=180&width=320",
      timestamp: "Last week",
      author: {
        name: "UXMind",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
  ],
}

export default function HistoryPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev)
  }

  return (
    <div className="flex">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className="flex-1 p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">History</h1>
          <Button variant="outline" size="sm">
            <Trash2 className="h-4 w-4 mr-2" />
            Clear all history
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
            <TabsTrigger value="creators">Creators</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">Today</h2>
              <div className="space-y-4">
                {historyData.today.map((item) => (
                  <HistoryItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Yesterday</h2>
              <div className="space-y-4">
                {historyData.yesterday.map((item) => (
                  <HistoryItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Past Week</h2>
              <div className="space-y-4">
                {historyData.pastWeek.map((item) => (
                  <HistoryItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="blogs">
            <div className="text-center py-12 text-muted-foreground">
              Filter by blogs (would show only blog content)
            </div>
          </TabsContent>

          <TabsContent value="creators">
            <div className="text-center py-12 text-muted-foreground">
              Filter by creators (would show content grouped by creator)
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function HistoryItem({ item }) {
  return (
    <Link href={`/blog/${item.id}`} className="group">
      <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors">
        <div className="w-32 h-20 relative rounded-md overflow-hidden flex-shrink-0">
          <Image
            src={item.coverImage || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium line-clamp-2">{item.title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <Avatar className="h-5 w-5">
              <AvatarImage src={item.author.avatar} />
              <AvatarFallback>{item.author.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">{item.author.name}</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">{item.timestamp}</div>
        </div>
      </div>
    </Link>
  )
}

