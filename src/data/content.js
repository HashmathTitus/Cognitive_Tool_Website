export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "domain", label: "Domain" },
  { id: "research", label: "Research" },
  { id: "features", label: "Features" },
  { id: "tools", label: "Tools" },
  { id: "milestones", label: "Milestones" },
  { id: "docs", label: "Docs" },
  { id: "team", label: "Team" },
  { id: "demo", label: "Demo" },
  { id: "links", label: "Links" },
  { id: "references", label: "References" },
  { id: "contact", label: "Contact" },
];

export const domainTabs = [
  {
    id: "background",
    title: "Background",
    content:
      "Dementia and mild cognitive impairment often evolve gradually, making early identification difficult in busy clinics and community care settings. Conventional assessments can miss subtle changes in behavior, speech, motor patterns, or early structural brain changes, especially during the initial stages.",
  },
  {
    id: "gap",
    title: "Research Gap",
    content:
      "Many current screening solutions focus on one data source only, such as questionnaires, speech, handwriting, or imaging. There is limited research translation into affordable, web-accessible platforms that integrate behavioral, cognitive, health, and MRI-based evidence for practical clinical decision support.",
  },
  {
    id: "problem",
    title: "Research Problem",
    content:
      "How can a multimodal AI platform be designed to support earlier and more accessible dementia risk screening by jointly analyzing speech behavior, handwriting dynamics, cognitive performance, health-related indicators, and optional MRI-based dementia staging with explainable outputs?",
  },
  {
    id: "objectives",
    title: "Research Objectives",
    points: [
      "Develop a speech-based cognitive screening component.",
      "Develop a handwriting behavior analysis component.",
      "Integrate health, lifestyle, and cognitive indicators.",
      "Combine multimodal outputs into a unified dementia risk workflow.",
      "Develop an MRI-based dementia staging component using deep learning with explainable heatmaps for clinician decision support.",
      "Deliver an accessible web-based research prototype.",
    ],
  },
];

export const aboutCards = [
  {
    title: "Speech Analysis",
    text: "Analyzes task-based spoken responses using acoustic, temporal, and linguistic cues relevant to cognitive health.",
    emoji: "🎙️",
  },
  {
    title: "Handwriting Analysis",
    text: "Captures writing trajectories, timing, pressure proxies, and motion behavior to identify subtle motor-cognitive changes.",
    emoji: "✍️",
  },
  {
    title: "Smart Health & Cognitive Assessment",
    text: "Integrates wearable trends, questionnaires, and cognitive tasks into a structured feature pipeline.",
    emoji: "🩺",
  },
  {
    title: "Dementia Stage Classification Using MRI Scans",
    text: "Analyzes MRI scans to predict dementia stage (Non, Very Mild, Mild, Moderate) with confidence and visual explanations.",
    emoji: "🧠",
  },
];

export const researchHighlights = [
  {
    title: "Speech Behavior Analysis",
    text: "Audio task responses are processed with extracted acoustic and temporal features to reflect communication-level cognitive patterns.",
    emoji: "🗣️",
  },
  {
    title: "Handwriting Dynamics",
    text: "Browser-based handwriting capture uses x-y coordinates and timestamps to quantify trajectory and motor behavior.",
    emoji: "📈",
  },
  {
    title: "Health & Cognitive Fusion",
    text: "Physiological, lifestyle, and cognitive indicators are transformed into structured multimodal features.",
    emoji: "🩺",
  },
  {
    title: "MRI Dementia Staging",
    text: "Deep learning analyzes brain MRI scans to classify dementia stage and generate explainable heatmaps highlighting key regions.",
    emoji: "🧠",
  },
];

export const keyFeatures = [
  {
    title: "Speech Assessment",
    description:
      "Records task-based spoken responses and extracts speech features to support cognitive behavior analysis.",
  },
  {
    title: "Handwriting Assessment",
    description:
      "Captures writing and drawing behavior in real time for motor, trajectory, and temporal pattern analysis.",
  },
  {
    title: "Health & Cognitive Module",
    description:
      "Processes wearable, questionnaire, and cognitive assessment data for broader dementia risk profiling.",
  },
  {
    title: "MRI Dementia Staging",
    description:
      "Analyzes structural brain MRI scans using deep learning to classify dementia stage and provide explainable heatmap outputs.",
},
];

export const technologies = [
  { name: "React", desc: "Component-based frontend UI", emoji: "⚛️" },
  { name: "Vite", desc: "Fast build and dev server", emoji: "⚡" },
  { name: "Tailwind CSS", desc: "Utility-first styling system", emoji: "🎨" },
  { name: "Python", desc: "AI and backend logic", emoji: "🐍" },
  { name: "FastAPI", desc: "High-performance API services", emoji: "🚀" },
  { name: "TensorFlow", desc: "Deep learning experimentation", emoji: "🧮" },
  { name: "Hugging Face", desc: "Transformer model ecosystem", emoji: "🤗" },
  { name: "CatBoost", desc: "Structured feature modeling", emoji: "📊" },
  { name: "MongoDB", desc: "Document-based data storage", emoji: "🍃" },
  { name: "Google Fit API", desc: "Activity and wellness signals", emoji: "⌚" },
  { name: "OCR / Tesseract", desc: "Text extraction pipeline", emoji: "🔍" },
  { name: "GitHub Actions", desc: "CI/CD automation workflows", emoji: "🔁" },
  { name: "Azure", desc: "Cloud deployment environment", emoji: "☁️" },
  { name: "Docker", desc: "Containerized microservices", emoji: "📦" },
  { name: "Semantic Similarity", desc: "LLM-aided response scoring", emoji: "🧩" },
];

export const milestones = [
  {
    title: "Topic Assessment",
    month: "July 2024",
    summary: "Initial topic scope, literature direction, and project feasibility review.",
  },
  {
    title: "Proposal Presentation",
    month: "August 2024",
    summary: "Proposed research architecture and methodology presented for evaluation.",
  },
  {
    title: "Proposal Report",
    month: "August 2024",
    summary: "Detailed proposal submitted with planned modules and data flow design.",
  },
  {
    title: "Progress Presentation 1",
    month: "December 2024",
    summary: "First implementation milestone with early module-level results.",
  },
  {
    title: "Research Paper Draft",
    month: "February 2025",
    summary: "Draft paper submitted covering background, method, and initial findings.",
  },
  {
    title: "Thesis / Final Report Submission",
    month: "March 2025",
    summary: "Complete research report with experiments and final architecture.",
  },
  {
    title: "Progress Presentation 2",
    month: "March 2025",
    summary: "Integrated prototype and validation progress shared with panel.",
  },
  {
    title: "Website Assessment",
    month: "May 2025",
    summary: "Research website and documentation artifacts reviewed.",
  },
  {
    title: "Final Presentation / Viva",
    month: "May 2025",
    summary: "Final demonstration, defense, and evaluation of the completed project.",
  },
];

export const documentGroups = [
  {
    group: "Proposal Documents",
    docs: [
      {
        title: "Project Proposal",
        viewUrl: "#",
        downloadUrl: "#",
      },
      {
        title: "Proposal Slide Deck",
        viewUrl: "#",
        downloadUrl: "#",
      },
    ],
  },
  {
    group: "Final Reports",
    docs: [
      { title: "Final Thesis Report", viewUrl: "#", downloadUrl: "#" },
      { title: "System Design Appendix", viewUrl: "#", downloadUrl: "#" },
    ],
  },
  {
    group: "Presentations",
    docs: [
      { title: "Progress Presentation 1", viewUrl: "#", downloadUrl: "#" },
      { title: "Progress Presentation 2", viewUrl: "#", downloadUrl: "#" },
      { title: "Final Viva Slides", viewUrl: "#", downloadUrl: "#" },
    ],
  },
  {
    group: "Research Paper",
    docs: [
      { title: "Conference Paper Draft", viewUrl: "#", downloadUrl: "#" },
      { title: "Camera-ready Manuscript", viewUrl: "#", downloadUrl: "#" },
    ],
  },
  {
    group: "Deployment Documents",
    docs: [
      { title: "Deployment Guide", viewUrl: "#", downloadUrl: "#" },
      { title: "API Documentation", viewUrl: "#", downloadUrl: "#" },
    ],
  },
  {
    group: "Registration / Other Docs",
    docs: [
      { title: "Topic Registration", viewUrl: "#", downloadUrl: "#" },
      { title: "Ethics and Consent Notes", viewUrl: "#", downloadUrl: "#" },
    ],
  },
];

export const teamMembers = [
  {
    name: "Dr. Supervisor Name",
    role: "Supervisor",
    email: "supervisor@university.edu",
    avatar:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Dr. Co-Supervisor Name",
    role: "Co-Supervisor",
    email: "co.supervisor@university.edu",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Team Leader Name",
    role: "Team Leader",
    email: "team.leader@university.edu",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Member One",
    role: "Member",
    email: "member1@university.edu",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Member Two",
    role: "Member",
    email: "member2@university.edu",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Member Three",
    role: "Member",
    email: "member3@university.edu",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=320&q=80",
  },
];

export const projectLinks = [
  {
    title: "GitHub Repository",
    description: "Source code and version history",
    href: "#",
    cta: "View Repository",
  },
  {
    title: "Frontend Deployment",
    description: "Live web interface for the research platform",
    href: "#",
    cta: "Visit Frontend",
  },
  {
    title: "Backend API",
    description: "Inference and screening service endpoints",
    href: "#",
    cta: "Open API",
  },
  {
    title: "Research Artifacts",
    description: "Models, reports, and experiment outputs",
    href: "#",
    cta: "Browse Artifacts",
  },
];

export const references = [
  "P. Sachdev et al., \"Classifying neurocognitive disorders: DSM-5 and beyond,\" Nature Reviews Neurology, 2014.",
  "A. Konig et al., \"Automatic speech analysis for the assessment of patients with predementia and Alzheimer\'s disease,\" Alzheimer\'s & Dementia, 2015.",
  "M. Werner et al., \"Digital clock drawing test for cognitive impairment screening,\" Journal of Alzheimer\'s Disease, 2022.",
  "M. Weiner et al., \"The Alzheimer\'s Disease Neuroimaging Initiative: A review of papers published since inception,\" Alzheimer\'s & Dementia, 2015.",
  "S. R. Kwon et al., \"Multimodal machine learning for early dementia risk estimation,\" IEEE Access, 2023.",
  "World Health Organization, \"Global status report on the public health response to dementia,\" WHO Press, 2021.",
];
