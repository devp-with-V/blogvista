"use client"

import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Sidebar from "@/components/sidebar"
import { useSidebar } from "@/context/sidebar-context"

// Mock data for blogs
const blogs = [
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
  {
    id: 4,
    title: "5 Design Principles Every Developer Should Know",
    excerpt: "Good design isn't just for designers. These principles will help developers create better UIs...",
    coverImage: "/placeholder.svg?height=180&width=320",
    createdAt: "3 weeks ago",
    views: "32K",
    author: {
      name: "DesignDev",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 5,
    title: "The Future of AI in Content Creation",
    excerpt: "How AI tools are revolutionizing the way we create and consume content on the web...",
    coverImage: "/placeholder.svg?height=180&width=320",
    createdAt: "1 month ago",
    views: "120K",
    author: {
      name: "AIExplorer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 6,
    title: "Building an E-commerce Platform from Scratch",
    excerpt: "A comprehensive guide to creating your own e-commerce platform using modern technologies...",
    coverImage: "/placeholder.svg?height=180&width=320",
    createdAt: "1 month ago",
    views: "56K",
    author: {
      name: "ShopTech",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 7,
    title: "Mastering CSS Grid Layout",
    excerpt: "A deep dive into CSS Grid and how it can transform your web layouts...",
    coverImage: "/placeholder.svg?height=180&width=320",
    createdAt: "2 months ago",
    views: "78K",
    author: {
      name: "CSSWizard",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 8,
    title: "The Psychology of User Experience",
    excerpt: "Understanding how psychology affects user behavior and how to design for it...",
    coverImage: "/placeholder.svg?height=180&width=320",
    createdAt: "2 months ago",
    views: "42K",
    author: {
      name: "UXMind",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 9,
    title: "Serverless Architecture: The Future of Backend",
    excerpt: "How serverless is changing the way we build and deploy backend services...",
    coverImage: "/placeholder.svg?height=180&width=320",
    createdAt: "3 months ago",
    views: "63K",
    author: {
      name: "CloudDev",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 10,
    title: "Optimizing React Performance",
    excerpt: "Practical techniques to make your React applications blazing fast...",
    coverImage: "/placeholder.svg?height=180&width=320",
    createdAt: "3 months ago",
    views: "91K",
    author: {
      name: "ReactPro",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 11,
    title: "The Rise of No-Code Development",
    excerpt: "How no-code platforms are democratizing software development...",
    coverImage: "/placeholder.svg?height=180&width=320",
    createdAt: "4 months ago",
    views: "38K",
    author: {
      name: "NoCodeNinja",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: 12,
    title: "Web Accessibility: A Complete Guide",
    excerpt: "Making your websites accessible to everyone is not just good practice, it's essential...",
    coverImage: "/placeholder.svg?height=180&width=320",
    createdAt: "4 months ago",
    views: "52K",
    author: {
      name: "A11yAdvocate",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
]

export default function Home() {
  const { collapsed } = useSidebar()

  return (
    <div className="flex">
      <Sidebar collapsed={collapsed} />
      <div className="flex-1 p-4 md:p-6">
        <div className="mb-6">
          <div className="flex overflow-x-auto pb-2 space-x-2 no-scrollbar">
            {["All", "Technology", "Design", "Programming"].map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "rounded-full whitespace-nowrap")}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.id}`} className="group">
              <div className="rounded-md overflow-hidden border bg-card transition-all hover:shadow-md">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={blog.coverImage || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={blog.author.avatar} />
                      <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h3 className="font-semibold line-clamp-2">{blog.title}</h3>
                      <div className="text-sm text-muted-foreground">
                        <span>{blog.author.name}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span>{blog.views} views</span>
                        <span className="mx-1">•</span>
                        <span>{blog.createdAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

