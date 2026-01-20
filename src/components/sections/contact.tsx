"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="container px-4 max-w-2xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
                    <p className="text-muted-foreground mb-12 text-lg">
                        Have a project in mind or just want to chat? Feel free to reach out.
                    </p>

                    <form className="space-y-4 text-left mb-16">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            rows={5}
                            className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        />
                        <Button className="w-full py-6 text-lg" size="lg">Send Message</Button>
                    </form>

                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/Uyitomi444" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/uyitomi-adebiyi-177384191" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://x.com/uyitomi2?s=11" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="mailto:uyitomiadebiyi@gmail.com" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="mt-20 pt-8 border-t text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Uyitomi Adebiyi . All rights reserved.
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
