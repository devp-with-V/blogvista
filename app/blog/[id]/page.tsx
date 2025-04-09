"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ThumbsUp, Share2, BookmarkPlus, Flag } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Sidebar from "@/components/sidebar"

// This would be a database query in a real app
const getBlog = (id: string) => {
  return {
    id: Number.parseInt(id),
    title: "10 Next.js Features You Should Use in 2024",
    content: `
      <p>Next.js has become the go-to React framework for building modern web applications. With version 14, it brings even more powerful features to the table. Here are the top 10 features you should be using in your projects:</p>
      
      <h2>1. Server Components</h2>
      <p>Server Components allow you to render components on the server, reducing the JavaScript sent to the client and improving performance. They're perfect for components that don't need interactivity.</p>
      
      <h2>2. Streaming</h2>
      <p>Streaming enables you to progressively render UI as data becomes available, rather than waiting for all data to load before showing anything to the user.</p>
      
      <h2>3. Parallel Routes</h2>
      <p>Parallel Routes allow you to show multiple pages in the same view, which is great for dashboards, split screens, and modals.</p>
      
      <h2>4. Intercepting Routes</h2>
      <p>With Intercepting Routes, you can show a route within the context of another route. This is perfect for modal patterns where you want to show additional UI without losing the context of the current page.</p>
      
      <h2>5. Server Actions</h2>
      <p>Server Actions let you define server-side functions that can be called from the client, making form submissions and data mutations more straightforward.</p>
      
      <h2>6. Partial Prerendering</h2>
      <p>This feature combines static and dynamic rendering, allowing you to prerender parts of a page while streaming in dynamic content.</p>
      
      <h2>7. Image Component Improvements</h2>
      <p>The Image component has been enhanced with better performance optimizations and more configuration options.</p>
      
      <h2>8. Turbopack</h2>
      <p>Turbopack is Next.js's new bundler, offering significantly faster build and refresh times compared to webpack.</p>
      
      <h2>9. On-demand ISR</h2>
      <p>On-demand Incremental Static Regeneration allows you to revalidate specific pages without rebuilding your entire site.</p>
      
      <h2>10. Metadata API</h2>
      <p>The Metadata API provides a more flexible way to define metadata for your pages, improving SEO and social sharing capabilities.</p>
      
      <p>Incorporating these features into your Next.js projects will not only improve performance but also enhance developer experience and user satisfaction.</p>
    `,
    coverImage: "/placeholder.svg?height=400&width=800",
    publishedAt: "February 15, 2024",
    readTime: "8 min read",
    views: "12K",
    likes: 843,
    comments: 56,
    author: {
      id: "techinsider",
      name: "TechInsider",
      avatar: "/placeholder.svg?height=100&width=100",
      subscribers: "128K",
    },
    relatedBlogs: [
      {
        id: 2,
        title: "The Ultimate Guide to Content Creation",
        coverImage: "/placeholder.svg?height=180&width=320",
        author: {
          name: "ContentMaster",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      },
      {
        id: 3,
        title: "Why TypeScript is Taking Over Frontend Development",
        coverImage: "/placeholder.svg?height=180&width=320",
        author: {
          name: "CodeCrafter",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      },
      {
        id: 5,
        title: "The Future of AI in Content Creation",
        coverImage: "/placeholder.svg?height=180&width=320",
        author: {
          name: "AIExplorer",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      },
    ],
  }
}

export default function BlogPage({ params }: { params: { id: string } }) {
  const blog = getBlog(params.id)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev)
  }

  return (
    <div className="flex">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className="flex flex-col md:flex-row flex-1">
        <div className="flex-1 max-w-4xl mx-auto p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{blog.title}</h1>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={blog.author.avatar} />
                <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <Link href={`/channel/${blog.author.id}`} className="font-medium hover:underline">
                  {blog.author.name}
                </Link>
                <div className="text-sm text-muted-foreground">{blog.author.subscribers} subscribers</div>
              </div>
            </div>
            <Button variant="secondary">Subscribe</Button>
          </div>

          <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
            <Image src={blog.coverImage || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
          </div>

          <div className="flex items-center justify-between mb-6 py-3 border-y">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ThumbsUp className="h-5 w-5" />
                </Button>
                <span>{blog.likes}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>{blog.comments} comments</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <BookmarkPlus className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Flag className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center text-sm text-muted-foreground mb-6">
            <span>{blog.publishedAt}</span>
            <span className="mx-2">•</span>
            <span>{blog.readTime}</span>
            <span className="mx-2">•</span>
            <span>{blog.views} views</span>
          </div>

          <div
            className="prose prose-invert max-w-none prose-headings:text-xl prose-p:text-base prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <Separator className="my-8" />

          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold">Comments</h3>
            {/* Comments would go here */}
            <div className="p-4 text-center border rounded-md bg-card">
              <p>Comments are currently disabled for this blog.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-72 p-4 md:p-6 border-t md:border-t-0 md:border-l">
          <h3 className="text-lg font-semibold mb-4">Related blogs</h3>
          <div className="space-y-4">
            {blog.relatedBlogs.map((relatedBlog) => (
              <Link key={relatedBlog.id} href={`/blog/${relatedBlog.id}`} className="group block">
                <div className="space-y-2">
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src={relatedBlog.coverImage || "/placeholder.svg"}
                      alt={relatedBlog.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-medium line-clamp-2 text-sm">{relatedBlog.title}</h4>
                  <div className="text-xs text-muted-foreground">{relatedBlog.author.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

