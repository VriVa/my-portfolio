export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://your-ecommerce-demo.com",
  }
]
