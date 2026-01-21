"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home, User, Folder, Code, Mail, Menu, X } from "lucide-react"
import { ExpandableTabs } from "@/components/ui/expandable-tabs"
import { AnimatePresence, motion } from "framer-motion"

export function Navbar() {
    const [scrolled, setScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
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
            setIsMobileMenuOpen(false)
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

                {/* Mobile Header Controls */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                </div>
            </div>

            {/* Mobile Navigation Stack (FAB) */}
            <div className="md:hidden fixed bottom-6 right-6 z-50 flex flex-col items-end">
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="mb-4 origin-bottom-right"
                        >
                            <ExpandableTabs
                                tabs={tabs.map(t => ({ title: t.title, icon: t.icon }))}
                                onChange={handleTabChange}
                                className="flex-col items-stretch bg-background/95 backdrop-blur-md border-border/50 shadow-2xl p-2 min-w-[200px]"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center transition-transform active:scale-90"
                    aria-label="Menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    )
}
