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
    title: "Pro-Script",
    description:
      "An AI-powered prescription manager app that detects drug interactions, contraindications, and allergy risks, parses handwritten prescriptions to flag dosage errors, retrieves similar patient cases, and provides personalized treatment recommendations.",
    image: "/projects/proscript.png",
    technologies: ["MERN Stack", "FastAPI", "TensorFlow", "Gemini API", "EasyOCR", "Fuzzy Search"],
    github: "https://github.com/DecayDestructor/airavat-proscript",
    demo: "https://drive.google.com/drive/folders/1hdhWUxo7vkVjPl-sRPQY00R_KE0zql44?usp=sharing",
  },
    {
    id: 2,
    title: "URL-SHORTENER",
    description:
      "A backend-focused URL shortener (Base62 encoding) designed to demonstrate caching strategies, rate limiting, background processing (database syncing), and real-time analytics like trending URLs.",
    image: "/projects/url.png",
    technologies: ["FastAPI", "Redis", "PostgreSQL", "Streamlit"],
    github: "https://github.com/VriVa/URL-shortener",
    demo: "https://drive.google.com/drive/folders/1hdhWUxo7vkVjPl-sRPQY00R_KE0zql44?usp=sharing",
  },
  {
    id: 3,
    title: "RACE",
    description:
      "An AI-powered platform that analyzes resumes using OCR, generates professional LaTeX versions, scores them with ATS metrics, suggests improvements, creates custom cover letters, and recommends courses based on skill gaps.",
    image: "/projects/race.png",
    technologies: ["MERN Stack", "Flask", "Langchain", "Gemini API", "TeX engine"],
    github: "https://github.com/trinity918/raceSE",
    demo: "https://drive.google.com/drive/folders/1hdhWUxo7vkVjPl-sRPQY00R_KE0zql44?usp=sharing",
  },
  {
    id: 4,
    title: "Stock-Master",
    description:
      "A simple and scalable Inventory Management System which helps you manage warehouses, stock, receipts, deliveries, and internal adjustments with a clean UI and modern backend",
    image: "/projects/stockmaster.jpeg",
    technologies: ["ReactJS", "FastAPI", "Supabase"],
    github: "https://github.com/VriVa/StockMaster-IMS",
    demo: "https://drive.google.com/drive/folders/1hdhWUxo7vkVjPl-sRPQY00R_KE0zql44?usp=sharing",
  },
  {
    id: 5,
    title: "Zero-Vault",
    description:
      "A password manager that lets users authenticate and access their vault without ever revealing passwords or master keys to the server. It uses zero-knowledge proofs so the server can verify identity while only storing encrypted data and public verification values. Also includes key recovery feature.",
    image: "/projects/zerovault.png",
    technologies: ["ReactJS", "Flask", "MongoDB"],
    github: "https://github.com/VriVa/ZeroVault-ZKP",
    demo: "https://drive.google.com/drive/folders/1hdhWUxo7vkVjPl-sRPQY00R_KE0zql44?usp=sharing",
  }
  

]
