"use client"

import { motion } from "framer-motion"
import { Code2, Layout, Smartphone, Zap, Palette, Wrench } from "lucide-react"
import { Card } from "@/components/ui/card"

const skills = [
    { name: "Frontend Dev", icon: Layout },
    { name: "React / Next.js", icon: Code2 },
    { name: "UI/UX Design", icon: Palette },
    { name: "Responsive Design", icon: Smartphone },
    { name: "Performance", icon: Zap },
    { name: "Troubleshooting", icon: Wrench },
]

export function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="container px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold">Skills & Expertise</h2>
                    <p className="text-muted-foreground mt-2">Tools I use to create.</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <Card className="p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors h-40">
                                <skill.icon className="w-8 h-8 text-primary/80" />
                                <span className="font-medium">{skill.name}</span>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
