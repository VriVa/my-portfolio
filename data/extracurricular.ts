export interface Extracurricular {
  id: number
  title: string
  organization: string
  duration: string
  description: string
  
  
}

export const extracurriculars: Extracurricular[] = [
  {
    id: 1,
    title: "Director of Digital Communication",
    organization: "Rotaract Club of S.P.I.T, Mumbai",
    duration: "August 2024 - June 2025",
    description:
      "Led a team of Subcommitee members along with Core and Supercore members in designing and executing social media campaigns.", 
  },
  {
    id: 2,
    title: "Mentor for School Children",
    organization: "Abhyudaya NGO at SPJIMR, Mumbai",
    duration: "January 2025 - June 2025",
    description:
      "Mentored school children in subjects like Maths, Science and English, enhancing their educational opportunities.", 
  },
  {
    id: 3,
    title: "Public Relations Subcommittee Member",
    organization: "Enactus Club of S.P.I.T, Mumbai",
    duration: "August 2024 - December 2024",
    description:
      "Executed integrated marketing campaigns driving student registrations through digital and offline channels.", 
  }
  
]
