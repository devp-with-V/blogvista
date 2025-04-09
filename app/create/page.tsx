"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ImagePlus } from "lucide-react"
import ProtectedRoute from "@/components/protected-route"
import Sidebar from "@/components/sidebar"
import { useSidebar } from "@/context/sidebar-context"

export default function CreateBlogPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { collapsed } = useSidebar()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to home page
    router.push("/")
  }

  return (
    <ProtectedRoute>
      <div className="flex">
        <Sidebar collapsed={collapsed} />
        <div className="container max-w-4xl py-6 px-4 md:px-6 md:py-10">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Create New Blog</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter a descriptive title" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cover">Cover Image</Label>
                  <div className="border rounded-md p-4 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-accent/50 transition-colors">
                    <ImagePlus className="h-10 w-10 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground text-center">
                      <p>Drag & drop an image here, or click to select</p>
                      <p>Recommended: 1280 x 720px</p>
                    </div>
                    <Input id="cover" type="file" accept="image/*" className="hidden" />
                    <Button variant="outline" type="button" onClick={() => document.getElementById("cover")?.click()}>
                      Upload Image
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="programming">Programming</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="productivity">Productivity</SelectItem>
                      <SelectItem value="ai">AI</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Write your blog content here..."
                    className="min-h-[300px]"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label>Publishing Options</Label>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="comments" className="cursor-pointer">
                        Allow Comments
                      </Label>
                      <p className="text-sm text-muted-foreground">Let readers comment on your blog</p>
                    </div>
                    <Switch id="comments" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="public" className="cursor-pointer">
                        Make Public
                      </Label>
                      <p className="text-sm text-muted-foreground">Make your blog visible to everyone</p>
                    </div>
                    <Switch id="public" defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={() => router.push("/")}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Publishing..." : "Publish Blog"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  )
}

