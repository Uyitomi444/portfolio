"use client"

import { motion } from "framer-motion"
import { ArrowDown, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center relative pt-20">
            <div className="container px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 order-2 md:order-1"
                >
                    <span className="text-muted-foreground text-lg tracking-wide">
                        Hi, I’m Uyi.
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                        Turning ideas into <br />
                        <span className="text-muted-foreground">clean, thoughtful</span> digital experiences.
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        A creative mind focused on building simple, intentional digital solutions.
                    </p>

                    <div className="flex gap-4 pt-4">
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

                {/* Right Side: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="order-1 md:order-2 flex justify-center md:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                        <Image
                            src="/profile.jpg"
                            alt="Uyitomi Adebiyi"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
            </motion.div>
        </section>
    )
}
