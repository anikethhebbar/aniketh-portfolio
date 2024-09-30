import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";


export const HERO_CONTENT = `A developer with a strong background in Natural Language Processing and backend services. Skilled in creating Generative AI applications that solve real problems. Always eager to learn and stay updated with new technology. Enjoys working in teams and delivering quality solutions.`;

export const ABOUT_TEXT = `Hello, I am Aniketh Hebbar, an NLP and Backend developer from Bengaluru, India. I've worked at Stride.AI and Interain as an NLP intern, received a copyright for healthcare work backed by the Department of Bio-Technology, Government of India. My expertise spans NLP, Generative AI, FastAPI, and  a little bit of React. I enjoy collaborative projects and continuous learning. Outside of work, I love photography and football. Let's go #BFC.`;
export const EXPERIENCES = [
  {
    year: "June 2024 – August 2024",
    role: "NLP Intern",
    company: "STRIDE.AI",
    description: `Developed RAG-powered copilots for law, banking, and customer service. Built data anonymization APIs, processing 100,000+ records with 90% accuracy. Refactored codebase to FastAPI, reducing API response times by 67-90%. Integrated OpenAI, Claude, and LangChain APIs, reducing AI infrastructure by 50%.`,
    technologies: ["Python", "FastAPI", "OpenAI", "Claude", "LangChain", "Docker", "Git"],
  },
  {
    year: "August 2023 – June 2024",
    role: "AIML Intern & Founding Member",
    company: "Interain",
    description: `Led AI/ML development from inception to MVP launch. Developed core NLP solutions using Azure OpenAI. Balanced academic commitments with startup responsibilities, contributing to product strategy and technical architecture. Successfully launched MVP, securing initial user adoption.`,
    technologies: ["Python", "Azure", "Typescript", "OpenAI", "NLP", "Docker","Git"]
  },
  {
    year: "December 2022 - January 2024",
    role: "E-YUVA Fellow",
    company: "DBT, Government of India, under BIRAC",
    description: `Developed Point of Care Kit for Infants to detect Jaundice from scratch. Conducted research as an E-YUVA Fellow in collaboration with Department of Bio Technology, Government of India, under BIRAC. Copyright Registration: SW-19282/2024, Copyright Office, Government of India.`,
    technologies: ["Python", "Machine Learning", "Image Processing", "Medical Imaging", "Healthcare"],
  },
];

export const EDUCATION = [
  {
    degree: "M.Tech in Computer Science and Engineering",
    institution: "Manipal Institute of Technology, Manipal",
    year: "2024 – 2026",
    location: "Manipal, Karnataka",
  },
  {
    degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning",
    institution: "Acharya Institute of Technology, Bengaluru",
    year: "2020 – 2024",
    location: "Bengaluru, Karnataka",
    cgpa: "7.8",
  },
];

export const PROJECTS = [
  {
    title: "Jaundice Detection Kit",
    image: project1,
    description:
      "Developed Point of Care Kit for Infants to detect Jaundice from scratch. Conducted research as an E-YUVA Fellow in collaboration with DBT, Government of India, under BIRAC.",
    technologies: ["Python", "Machine Learning"],
    link: "https://www.linkedin.com/posts/anikethhebbar_eyuva-birac-teamwork-activity-7232958208519069696-fOck?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "Data Anonymization",
    image: project2,
    description:
      "Developed a Microsoft Presidio powered data anonymization service to mask data before sending it to LLMs. Extended Presidio’s capabilities by adding custom recognizers for various national identity formats.",
    technologies: ["Python", "Microsoft Presidio"],
    link: "https://github.com/anikethhebbar/anonymization-service"
  },
  {
    title: "Deep Detect",
    image: project3,
    description:
      "Developed a DeepFake detection system using CNNs, enhancing digital security. Aimed at preventing deepfake misuse, promoting safer online interactions.",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    link: "https://github.com/anikethhebbar/deep-detect"
  },
];

export const SKILLS = {
  languages: ["Python", "SQL", "HTML/CSS"],
  tools: ["OpenAI API", "Microsoft Azure", "MongoDB Atlas", "Amazon AWS", "Git/GitHub", "Unix Shell", "Docker"],
  frameworks: ["FastAPI", "Flask", "TensorFlow", "PyTorch", "LangChain", "OpenCV", "pandas", "NumPy", "spaCy"],
};

export const CERTIFICATIONS = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    description: `Gained foundational knowledge in AI concepts and their application using Microsoft Azure. Developed skills in identifying and describing various AI workloads, including computer vision, Natural Language Processing (NLP), and generative AI.`,
    date: "June 2024",
  },
];

export const CONTACT = {
  address: "Bengaluru, India",
  phoneNo: "+91-9019772846",
  email: "anikethhebbar@gmail.com",
  linkedin: "Linkedin",
  github: "Github",
};
