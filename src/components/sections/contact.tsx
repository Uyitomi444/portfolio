"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter, Loader2, Send } from "lucide-react"

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmitting(true)

        // TODO: Replace with your actual Formspree Form ID
        // Sign up at formspree.io and create a new form to get your ID
        const FORMSPREE_ID = "xqeegyrq" // Updated with user's ID

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            })

            if (response.ok) {
                setIsSuccess(true)
            } else {
                alert("Something went wrong. Please try again.")
            }
        } catch (error) {
            alert("Error sending message. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

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

                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-secondary/50 p-8 rounded-2xl mb-16 border border-border"
                        >
                            <div className="flex flex-col items-center gap-4">
                                <div className="p-4 bg-primary/10 rounded-full text-primary">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold">Message Sent!</h3>
                                <p className="text-muted-foreground">
                                    Thanks for reaching out, Uyitomi. I'll get back to you as soon as possible.
                                </p>
                                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                                    Send another message
                                </Button>
                            </div>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4 text-left mb-16">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>
                            <textarea
                                required
                                name="message"
                                placeholder="Message"
                                rows={5}
                                className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                            />
                            <Button className="w-full py-6 text-lg" size="lg" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </Button>
                        </form>
                    )}

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
