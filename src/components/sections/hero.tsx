"use client"

import { motion } from "framer-motion"
import { ArrowDown, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center relative pt-20 pb-24 overflow-hidden">
            <div className="container px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Side: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={cn(
                        "fixed top-0 w-full z-50 transition-all duration-300",
                        scrolled
                            ? "bg-black/95 border-b border-border/50 py-2 shadow-lg backdrop-blur-md"
                            : "bg-transparent py-4 md:py-6"
                    )}
                >
                    <span className="text-muted-foreground text-lg tracking-wide">
                        My name is Uyitomi.
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                        I turn ideas into <br />
                        <span className="text-muted-foreground">clean, thoughtful</span> digital experiences.
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto md:mx-0">
                        A creative mind focused on building simple, intentional digital solutions.
                    </p>

                    <div className="flex justify-center md:justify-start gap-4 pt-4">
                        <Button asChild size="lg" className="rounded-full px-8">
                            <a href="#projects">View Work</a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2">
                            <a href="/resume.pdf" download="Resume-Uyitomi-Adebiyi">
                                Resume <FileText className="w-4 h-4" />
                            </a>
                        </Button>
                    </div>
                </motion.div>

                {/* Right Side: Refined Photo in Circle */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end items-center h-[340px] md:h-[560px] w-full relative group">
                    {/* Background Glow/Circle */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="absolute z-0 h-[280px] w-[280px] md:h-[400px] md:w-[400px] lg:h-[480px] lg:w-[480px] rounded-full bg-gradient-to-tr from-blue-500/20 to-indigo-500/10 dark:from-blue-400/15 dark:to-indigo-400/5 blur-sm"
                    />

                    {/* Image Container with circular crop */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                        className="relative z-10 h-[260px] w-[260px] md:h-[380px] md:w-[380px] lg:h-[450px] lg:w-[450px] rounded-full overflow-hidden border-4 border-background/50 shadow-2xl"
                    >
                        <img
                            src="/profile.jpg"
                            alt="Uyitomi Adebiyi"
                            className="w-full h-full object-cover object-center scale-110 transition-transform duration-500 group-hover:scale-115"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
            </motion.div>

            {/* Ambient background gradient */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
        </section>
    )
}
