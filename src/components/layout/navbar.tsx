"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home, User, Folder, Code, Mail } from "lucide-react"
import { ExpandableTabs } from "@/components/ui/expandable-tabs"

export function Navbar() {
    const [scrolled, setScrolled] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const tabs = [
        { title: "Home", icon: Home, href: "#" },
        { title: "About", icon: User, href: "#about" },
        { title: "Skills", icon: Code, href: "#skills" },
        { title: "Projects", icon: Folder, href: "#projects" },
        { title: "Contact", icon: Mail, href: "#contact" },
    ]

    const handleTabChange = (index: number | null) => {
        if (index === null) return
        const tab = tabs[index]
        if (tab?.href) {
            if (tab.href === "#") {
                window.scrollTo({ top: 0, behavior: "smooth" })
                return
            }
            const element = document.querySelector(tab.href)
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }
    }

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-2 shadow-sm"
                    : "bg-transparent py-4 md:py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-lg md:text-xl font-bold tracking-tight z-50">
                    Welcome to my portfolio
                </Link>

                <div className="hidden md:flex items-center gap-4">
                    <ExpandableTabs
                        tabs={tabs.map(t => ({ title: t.title, icon: t.icon }))}
                        onChange={handleTabChange}
                        className="bg-background/50 border-border/40 backdrop-blur-sm"
                    />
                    <div className="pl-2 border-l border-border/50">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile View: Simplified */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    {/* For mobile, we could implement a bottom bar or hamburger, 
                         but for now keeping it clean with just the theme toggle 
                         and title as requested main focus is desktop premium feel 
                         while maintaining responsiveness */}
                </div>
            </div>

            {/* Mobile Navigation Dock */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[400px]">
                <div className="flex justify-center w-full">
                    <ExpandableTabs
                        tabs={tabs.map(t => ({ title: t.title, icon: t.icon }))}
                        onChange={handleTabChange}
                        className="bg-background/80 backdrop-blur-lg border-border/50 shadow-2xl w-full justify-between"
                    />
                </div>
            </div>
        </header>
    )
}
