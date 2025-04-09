import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { Settings, Share2 } from "lucide-react"

// Mock data
const user = {
  name: "Jane Smith",
  username: "janesmith",
  avatar: "/placeholder.svg?height=100&width=100",
  coverImage: "/placeholder.svg?height=300&width=1200",
  bio: "Tech writer and developer advocate. I write about web development, React, and the latest in tech.",
  subscribers: 24800,
  joinedDate: "Jan 2022",
  blogs: [
    {
      id: 1,
      title: "Getting Started with React Server Components",
      coverImage: "/placeholder.svg?height=180&width=320",
      views: "8.2K",
      publishedAt: "2 weeks ago",
    },
    {
      id: 2,
      title: "Understanding TypeScript Generics",
      coverImage: "/placeholder.svg?height=180&width=320",
      views: "12K",
      publishedAt: "1 month ago",
    },
    {
      id: 3,
      title: "Building a Blog with Next.js and Tailwind",
      coverImage: "/placeholder.svg?height=180&width=320",
      views: "15K",
      publishedAt: "2 months ago",
    },
  ],
  playlists: [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      blogs: 5,
      coverImage: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 2,
      title: "React Deep Dive",
      blogs: 8,
      coverImage: "/placeholder.svg?height=180&width=320",
    },
  ],
}

export default function ProfilePage() {
  return (
    <div>
      <div className="relative h-48 md:h-64">
        <Image src={user.coverImage || "/placeholder.svg"} alt="Cover" fill className="object-cover" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-6 md:mb-8 relative">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>

          <div className="mt-4 md:ml-6 md:mb-2 flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">{user.name}</h1>
            <p className="text-muted-foreground">@{user.username}</p>
            <div className="text-sm mt-1">
              <span>{user.subscribers.toLocaleString()} subscribers</span>
              <span className="mx-2">•</span>
              <span>Joined {user.joinedDate}</span>
            </div>
          </div>

          <div className="flex mt-4 md:mt-0 space-x-2">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button size="sm">Subscribe</Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <p className="mb-6">{user.bio}</p>

        <Tabs defaultValue="blogs" className="mb-12">
          <TabsList>
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <TabsContent value="blogs" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.blogs.map((blog) => (
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
                      <h3 className="font-semibold line-clamp-2">{blog.title}</h3>
                      <div className="text-xs text-muted-foreground mt-2">
                        <span>{blog.views} views</span>
                        <span className="mx-1">•</span>
                        <span>{blog.publishedAt}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="playlists" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.playlists.map((playlist) => (
                <Link key={playlist.id} href={`/playlists/${playlist.id}`} className="group">
                  <div className="rounded-md overflow-hidden border bg-card transition-all hover:shadow-md">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={playlist.coverImage || "/placeholder.svg"}
                        alt={playlist.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold line-clamp-2">{playlist.title}</h3>
                      <div className="text-xs text-muted-foreground mt-2">
                        <span>{playlist.blogs} blogs</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="pt-6">
            <div className="max-w-3xl space-y-6">
              <div>
                <h3 className="font-semibold mb-2">About</h3>
                <p>
                  Tech writer and developer advocate focusing on modern web technologies. I share my insights,
                  tutorials, and experiences in the world of software development.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Links</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-primary hover:underline">
                    Personal Website
                  </a>
                  <a href="#" className="block text-primary hover:underline">
                    GitHub
                  </a>
                  <a href="#" className="block text-primary hover:underline">
                    Twitter
                  </a>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Stats</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold">24.8K</div>
                    <div className="text-sm text-muted-foreground">Subscribers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">156K</div>
                    <div className="text-sm text-muted-foreground">Total Views</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Jan 2022</div>
                    <div className="text-sm text-muted-foreground">Joined</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

