"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
    return (
        <section id="about" className="py-24 bg-secondary/30">
            <div className="container px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Text Content */}
                    <div className="space-y-6 text-center md:text-left order-2 md:order-1">
                        <h2 className="text-3xl font-bold">About Me</h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I’m Uyitomi Adebiyi, a front-end developer who enjoys building clean, intuitive digital experiences.
                            </p>
                            <p>
                                I focus on simplicity, clarity, and thoughtful design, creating solutions that feel natural and easy to use. My experience spans web development, IT support, and AI-driven projects.
                            </p>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex justify-center md:justify-end order-1 md:order-2">
                        <div className="relative w-64 h-64 md:w-[350px] md:h-[400px] rounded-2xl overflow-hidden border border-border shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="/profile.jpg"
                                alt="Uyitomi Adebiyi"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
