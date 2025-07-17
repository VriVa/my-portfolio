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
    title: "ProScript",
    description:
      "An AI-powered prescription manager app that detects drug interactions, contraindications, and allergy risks, parses handwritten prescriptions to flag dosage errors, retrieves similar patient cases, and provides personalized treatment recommendations.",
    image: "/projects/proscript.png",
    technologies: ["MERN Stack", "FastAPI", "TensorFlow", "Gemini API", "OpenAI OCR", "Fuzzy Search"],
    github: "https://github.com/DecayDestructor/airavat-proscript",
    demo: "https://drive.google.com/drive/folders/1hdhWUxo7vkVjPl-sRPQY00R_KE0zql44?usp=sharing",
  },
  {
    id: 2,
    title: "RACE",
    description:
      "An AI-powered platform that analyzes resumes using OCR, generates professional LaTeX versions, scores them with ATS metrics, suggests improvements, creates custom cover letters, and recommends courses based on skill gaps.",
    image: "/projects/race.png",
    technologies: ["MERN Stack", "Flask", "Langchain", "Gemini API", "PaddleOCR", "TeX engine"],
    github: "https://github.com/trinity918/raceSE",
    demo: "https://drive.google.com/drive/folders/1hdhWUxo7vkVjPl-sRPQY00R_KE0zql44?usp=sharing",
  },
  {
    id: 4,
    title: "SheFunds",
    description:
      "A financial literacy platform designed exclusively for women, addressing their unique financial challenges and providing education, tools, and community support to help them achieve economic independence.",
    image: "/projects/shefunds.png",
    technologies: ["ReactJS", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/trinity918/raceSE",
    demo: "https://drive.google.com/drive/folders/1hdhWUxo7vkVjPl-sRPQY00R_KE0zql44?usp=sharing",
  },
  {
    id: 3,
    title: "Wanderlust",
    description:
      "An app to plan trip with AI-powered itineraries according to your budget, food preferences, trip type, etc. The itinerary also includes weather forecast and directions.",
    image: "/projects/wanderlust.png",
    technologies: ["ReactJS", "TailwindCSS", "Gemini API", "Google Maps API"],
    github: "https://github.com/trinity918/raceSE",
    demo: "https://drive.google.com/drive/folders/1hdhWUxo7vkVjPl-sRPQY00R_KE0zql44?usp=sharing",
  }
  

]
