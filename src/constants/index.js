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
    technologies: ["Python", "Azure", "Typescript", "OpenAI", "NLP", "Docker", "Git"]
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
export const LINKEDIN_RECOMMENDATIONS = [
  {
    name: "Dr. Mousumi Saha",
    position: "Project Coordinator; Bio-Innovation; Translational Research; Microbiology",
    relationship: "Dr. Mousumi managed Aniketh directly",
    recommendation: "I have had the privilege of working closely with Aniketh since 2022. I have been consistently impressed by his dedication and personal qualities. He is actively involved in research and innovation as an E-YUVA fellow. His work on the E-YUVA project was insightful and has great potential for future applications in healthcare. Aniketh led various initiatives, showing exceptional organizational skills, problem-solving capabilities, and the ability to inspire and motivate his peers. His humility, coupled with a strong work ethic, makes him well-respected among both faculty and fellow students. I wholeheartedly recommend him and am confident that he will bring the same level of excellence, dedication, and leadership to any endeavor he pursues.",
    linkedin: "https://www.linkedin.com/in/dr-mousumi-saha-33556948",
  },
  {
    name: "Dhanush N",
    position: "Founder & CEO at Interain",
    relationship: "Dhanush managed Aniketh directly",
    recommendation: "Despite being an intern at Interain, Aniketh effectively led our tech initiatives, displaying remarkable independence and technical prowess. His contributions were crucial to the success of our EdTech startup. He consistently delivered high-quality solutions, and his teamwork and leadership were invaluable. Aniketh is a true asset to any team.",
    linkedin: "https://www.linkedin.com/in/dhanush-n-00724a196",
  },
  {
    name: "Dr. Vijayashekhar S Sankannanavar",
    position: "Teaching and Research in AI/ML, Computer Vision, and Data Analytics, HOD, AI & ML, Acharya Institute of Technology",
    relationship: "Dr. Vijayashekhar was Aniketh’s teacher",
    recommendation: "Aniketh is an excellent student with strong technical skills in AI and ML. He grasps concepts quickly and demonstrates advanced programming abilities. He is highly capable of tackling complex problems and excels in his field.",
    linkedin: "https://www.linkedin.com/in/dr-vijayashekhar-s-sankannanavar-a25648192",
  },
  {
    name: "Dr. Ajith Padyana",
    position: "HOD CSE, Acharya Institute of Technology",
    relationship: "Dr. Ajith managed Aniketh directly",
    recommendation: "As a dynamic software engineering student, Aniketh has shown exceptional enthusiasm and capability in all tasks he undertakes. He was a key member of the first batch of the AI and ML department and played a vital role in executing a major Biotechnology project. I highly recommend him for software development roles in AI and ML.",
    linkedin: "https://www.linkedin.com/in/drajithpadyana",
  },
  {
    name: "Poornachandra Kashi",
    position: "Engineering at Astuto.AI",
    relationship: "Poornachandra worked with Aniketh on the same team",
    recommendation: "I had the pleasure of working closely with Aniketh as part of the NLP team, where he demonstrated an exceptional ability to build and fine-tune cutting-edge NLP models. From the start, Aniketh displayed a deep understanding of natural language processing and machine learning concepts, combined with an impressive ability to solve complex problems with creativity and precision. Beyond his technical skills, Aniketh was a fantastic team player, always willing to collaborate, share knowledge, and mentor others. I highly recommend Aniketh for any future opportunities in NLP and machine learning.",
    linkedin: "https://www.linkedin.com/in/poornachandrakashi",
  },
];
