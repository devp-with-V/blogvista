"use client"

import { useState } from "react"
import Link from "next/link"
import Sidebar from "@/components/sidebar"

// Mock data for explore page
const exploreCategories = [
  {
    id: "tech",
    title: "Technology",
    blogs: [
      { id: 1, title: "The Future of Web Development in 2024" },
      { id: 2, title: "Understanding Artificial Intelligence Basics" },
      { id: 3, title: "How 5G Will Transform Our Digital Lives" },
      { id: 4, title: "Blockchain Beyond Cryptocurrency" },
      { id: 5, title: "The Rise of Edge Computing" },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    blogs: [
      { id: 6, title: "Mastering TypeScript for Modern Applications" },
      { id: 7, title: "Rust vs Go: Which One Should You Learn?" },
      { id: 8, title: "Python for Data Science: A Beginner's Guide" },
      { id: 9, title: "Functional Programming Concepts Every Developer Should Know" },
      { id: 10, title: "Building Microservices with Node.js" },
    ],
  },
  {
    id: "design",
    title: "Design",
    blogs: [
      { id: 11, title: "Design Systems: Why Every Company Needs One" },
      { id: 12, title: "Color Theory for Digital Designers" },
      { id: 13, title: "UX Writing: The Art of Crafting Microcopy" },
      { id: 14, title: "Responsive Design in 2024: Beyond Media Queries" },
      { id: 15, title: "Accessibility First: Designing for Everyone" },
    ],
  },
  {
    id: "productivity",
    title: "Productivity",
    blogs: [
      { id: 16, title: "The Pomodoro Technique: Work Smarter, Not Harder" },
      { id: 17, title: "Digital Minimalism: Decluttering Your Digital Life" },
      { id: 18, title: "Building a Second Brain: Note-Taking Systems" },
      { id: 19, title: "Time Blocking: The Secret to Productive Days" },
      { id: 20, title: "Deep Work: Rules for Focused Success" },
    ],
  },
  {
    id: "business",
    title: "Business",
    blogs: [
      { id: 21, title: "Bootstrapping vs VC Funding: Pros and Cons" },
      { id: 22, title: "Building a Personal Brand in the Digital Age" },
      { id: 23, title: "Remote Work Culture: Leading Distributed Teams" },
      { id: 24, title: "SaaS Pricing Strategies That Work" },
      { id: 25, title: "Customer Experience: The New Competitive Advantage" },
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    blogs: [
      { id: 26, title: "Machine Learning for Non-Technical People" },
      { id: 27, title: "Natural Language Processing: Current State and Future" },
      { id: 28, title: "Ethical Considerations in AI Development" },
      { id: 29, title: "Computer Vision Applications in Healthcare" },
      { id: 30, title: "Reinforcement Learning: From Games to Real World" },
    ],
  },
]

export default function ExplorePage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev)
  }

  return (
    <div className="flex">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className="flex-1 p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-6">Explore Topics</h1>

        <div className="grid gap-8">
          {exploreCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <h2 className="text-xl font-semibold">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.blogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.id}`}
                    className="bg-card hover:bg-accent/50 transition-colors p-4 rounded-xl border"
                  >
                    <h3 className="font-medium">{blog.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

