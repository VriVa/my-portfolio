export interface Experience {
  id: number
  position: string
  company: string
  duration: string
  location: string
  description: string
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2023 - Present",
    location: "San Francisco, CA",
    description:
      "Developed and maintained responsive web applications using React and Next.js. Collaborated with design teams to implement pixel-perfect UI components and improved application performance by 40%. Led the migration of legacy codebase to modern frameworks.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  }
]
