"use client"

import { motion } from "framer-motion"
import { ArrowDown, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SplineScene } from "@/components/ui/spline-scene"

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center relative pt-20 pb-24 overflow-hidden">
            <div className="container px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Side: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 order-2 md:order-1 text-center md:text-left"
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

                {/* Right Side: Spline 3D Scene */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end h-[300px] md:h-[600px] w-full relative">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
            </motion.div>

            {/* Ambient Background Gradient (Optional enhancement for premium feel) */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
        </section>
    )
}
