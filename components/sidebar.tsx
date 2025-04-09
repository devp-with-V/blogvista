import { Home, Compass, BookMarked, Clock, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface SidebarProps {
  collapsed: boolean
}

export default function Sidebar({ collapsed }: SidebarProps) {
  return (
    <div className={cn("border-r transition-all duration-300 ease-in-out", collapsed ? "w-[70px]" : "w-[240px]")}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          {!collapsed && <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Discover</h2>}
          <div className="space-y-1">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start",
                collapsed && "justify-center px-2",
              )}
            >
              <Home className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
              {!collapsed && <span>Home</span>}
            </Link>
            <Link
              href="/explore"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start",
                collapsed && "justify-center px-2",
              )}
            >
              <Compass className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
              {!collapsed && <span>Explore</span>}
            </Link>
          </div>
        </div>
        <div className="px-4 py-2">
          {!collapsed && <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Library</h2>}
          <div className="space-y-1">
            <Link
              href="/history"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start",
                collapsed && "justify-center px-2",
              )}
            >
              <Clock className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
              {!collapsed && <span>Recently Read</span>}
            </Link>
            <Link
              href="/bookmarks"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start",
                collapsed && "justify-center px-2",
              )}
            >
              <BookMarked className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
              {!collapsed && <span>Collected</span>}
            </Link>
            <Link
              href="/liked"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start",
                collapsed && "justify-center px-2",
              )}
            >
              <ThumbsUp className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
              {!collapsed && <span>Liked Blogs</span>}
            </Link>
          </div>
        </div>
        {!collapsed && (
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Subscriptions</h2>
            <div className="space-y-1">
              {/* This would be populated dynamically */}
              {["Tech Writer", "Food Blogger", "Travel Guide","..."].map((creator) => (
                <Link
                  key={creator}
                  href={`/channel/${creator.toLowerCase().replace(" ", "-")}`}
                  className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-start")}
                >
                  <div className="mr-2 h-4 w-4 rounded-full bg-primary" />
                  {creator}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

