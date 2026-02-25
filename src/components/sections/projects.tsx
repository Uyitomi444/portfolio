"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
    {
        title: "Aurea",
        description: "Timeless heirloom pieces crafted for modern royalty. Each piece in the Imperial Gold Series carries centuries of artisan heritage — sculpted, polished, and set by hand.",
        tags: ["Luxury Jewelry", "Handcrafted", "Heritage"],
        image: "/projects/aurea.svg",
        link: "https://aurea-jewelry.vercel.app/",
    },
    {
        title: "LagosFit",
        description: "The smart way to find your perfect neighborhood in Lagos. Data-driven, honest, and easy.",
        tags: ["React", "Data Visualization", "Real Estate"],
        image: "/projects/lagosfit.png",
        link: "https://lagosfit-main.vercel.app/",
    },
    {
        title: "Elizade Marketplace",
        description: "A web-based e-commerce platform for Elizade University, featuring modern UI, Paystack integration, and AI chatbot 'Elibot'.",
        tags: ["React", "Node.js", "AI Integration"],
        image: "/projects/declutterhub.png",
        link: "https://elizade-marketplace.vercel.app/",
    },
]

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-secondary/30">
            <div className="container px-4 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold">Featured Projects</h2>
                    <p className="text-muted-foreground mt-2">Some things I've built.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full border-0 shadow-none bg-background/50 hover:bg-background transition-all duration-300 overflow-hidden group flex flex-col">
                                <div className="relative h-48 w-full overflow-hidden bg-muted">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <CardHeader>
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild variant="outline" className="w-full gap-2 group-hover:border-primary/50 transition-colors">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            View Project <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
