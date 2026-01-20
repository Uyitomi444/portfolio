"use client"

import { motion } from "framer-motion"

export function About() {
    return (
        <section id="about" className="py-24 bg-secondary/30">
            <div className="container px-4 max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-8">About Me</h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        I’m Uyitomi Adebiyi, a front-end developer who enjoys building clean, intuitive digital experiences.
                        I focus on simplicity, clarity, and thoughtful design, creating solutions that feel natural and easy to use. My experience spans web development, IT support, and AI-driven projects.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
