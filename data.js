// ─── All portfolio content lives here. Edit this file to update the site. ───

const PROFILE = {
  name: "Sana Hameed",
  firstName: "Sana",
  role: "Microbiologist",
  tagline: "Microbiology, molecular diagnostics and biomedical research.",
  affiliation: "M.Sc. in Microbiology",
  university: "Shaheed Benazir Bhutto Women University",
  location: "Peshawar, Pakistan",
  avatar: "Assets/Sana.png",
  email: "sanahameedkhankori@gmail.com",
  links: [
    { label: "Email",    icon: "mail",     href: "mailto:sanahameedkhankori@gmail.com" },
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/sana-hameed-915691450" },
    { label: "CV",       icon: "cv",       href: "Assets/SanaCV.pdf" },
  ],
};

const WORK_LOGOS = [
  { name: "Shaheed Benazir Bhutto Women University, Peshawar", src: "Assets/benazirbhuttologo.gif" },
];

const NAV = [
  { id: "about",      label: "About" },
  { id: "education",  label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects" },
  { id: "skills",     label: "Lab Skills" },
  { id: "honors",     label: "Certificates" },
  { id: "misc",       label: "Hobbies" },
];

const ABOUT = {
  intro: `Hi, I'm Sana Hameed, a research-oriented microbiologist with a Master of Science in Microbiology from Shaheed Benazir Bhutto Women University, Peshawar, Pakistan. I have a strong foundation in microbiology, molecular biology, clinical diagnostics, and biomedical sciences, with hands-on experience in laboratory-based investigations, experimental methodologies, data analysis, and scientific research.`,
  extra: `I am motivated to pursue doctoral research, contribute to scientific innovation, and address emerging challenges in biological and health sciences.`,
  interests: [
    {
      title: "Microbiology",
      desc: "Isolation, cultivation, and identification of bacteria, viruses, and fungi using established microbiological methods.",
    },
    {
      title: "Infectious Diseases",
      desc: "Diagnosis of pathogenic microorganisms in clinical samples and antimicrobial susceptibility and resistance.",
    },
    {
      title: "Molecular Diagnostics",
      desc: "Molecular and in-silico approaches to understand pathogens and the mechanisms behind disease progression.",
    },
    {
      title: "Biotechnology & Biomedical Sciences",
      desc: "Interdisciplinary research at the intersection of molecular biology, immunology, and plant and human health.",
    },
  ],
};

const EDUCATION = [
  {
    period: "Oct 2025",
    place: "Peshawar, Pakistan",
    degree: "Master of Science in Microbiology",
    school: "Shaheed Benazir Bhutto Women University",
    points: [
      "Thesis: Investigation of Yellow Rust Disease on Different Wheat Varieties and In-Silico Analysis of Catalase Core Domain Involved in Disease Progression by Puccinia striiformis.",
      "Major Courses: Advances in Microbiology, Medical Virology, Molecular Biology and Biotechnology, Research Methodology, Advanced Immunology.",
    ],
  },
  {
    period: "Mar 2022",
    place: "Peshawar, Pakistan",
    degree: "Bachelor of Science in Microbiology",
    school: "Shaheed Benazir Bhutto Women University",
    points: [
      "Thesis: Introduction to Laboratory Diagnosis of Pathogenic Microorganisms in a Microbiology Laboratory.",
      "Major Courses: Fundamentals of Microbiology, General Virology, Soil Microbiology, Environmental Microbiology, Food Microbiology.",
    ],
  },
];

const EXPERIENCE = [
  {
    period: "",
    place: "Peshawar, Pakistan",
    role: "Undergraduate Intern",
    org: "Hayatabad Medical Complex",
    points: [
      "Studied and applied diagnostic techniques for identifying pathogenic microorganisms in clinical samples.",
      "Participated in antimicrobial susceptibility testing and related validation activities to support treatment decisions.",
      "Assisted with laboratory quality-control measures to improve the accuracy and reliability of test results.",
    ],
    tags: ["Clinical Diagnostics", "Antimicrobial Testing", "Quality Control"],
  },
];

const PROJECTS = [
  {
    period: "2022",
    title: "Diagnosis of Pathogenic Microorganisms in a Microbiology Laboratory",
    points: [
      "Studied laboratory techniques used to detect and identify pathogenic microorganisms in clinical samples.",
      "Performed Gram staining and biochemical tests, including catalase, citrate, and DNase, to support bacterial identification.",
      "Examined microbial growth characteristics and interpreted laboratory findings for pathogen identification.",
    ],
  },
  {
    period: "",
    title: "Microbiological Isolation and Identification",
    points: [
      "Prepared culture media and applied laboratory techniques for microbial isolation and cultivation.",
      "Studied the identification of bacteria, viruses, and fungi using appropriate microbiological methods.",
      "Observed microbial characteristics and analyzed laboratory results to distinguish different microorganisms.",
    ],
  },
  {
    period: "",
    title: "Antimicrobial Susceptibility Testing",
    points: [
      "Participated in antimicrobial susceptibility testing to evaluate bacterial responses to different antibiotics.",
      "Studied laboratory procedures used to determine antibiotic sensitivity and resistance.",
      "Assisted in interpreting susceptibility test results to support appropriate antibiotic selection.",
    ],
  },
];

const SKILLS = [
  { title: "Microbiology",          desc: "Culture media preparation; microbial culturing, isolation, and identification; Gram staining." },
  { title: "Biochemical Testing",   desc: "Catalase, citrate, and DNase tests." },
  { title: "Antimicrobial Testing", desc: "Antibiotic susceptibility testing and sensitivity profiling." },
  { title: "Clinical Diagnostics",  desc: "Urinalysis; serological assays (CRP, ASO, RF, Typhidot); hematological tests (TLC, DLC, ESR)." },
  { title: "Laboratory Practice",   desc: "Quality control, systematic sample analysis, and accurate reporting of laboratory results." },
];

const HONORS = [
  { title: "Popularization of Eco-Friendly Insect Pest Control Technologies", org: "Certificate for completing the one-day workshop · NIFA, Peshawar" },
  { title: "Soft Skills and Career Development", org: "Certificate · Center for Awareness Training and Development Skills" },
  { title: "Scientists Convention: Science for Socio-Economic Development", org: "Participation certificate · Pakistan Science Foundation Golden Jubilee Celebrations, Islamabad" },
  { title: "Women Employability Summit and Career Fair 2018", org: "Participation certificate · Shaheed Benazir Bhutto Women University and the Center for Awareness Training and Development" },
  { title: "Advances in Seed Storage Techniques", org: "Attendance certificate, two-day international conference · University of Agriculture, Peshawar" },
];

const HOBBIES = [
  { title: "Academic", desc: "Reading and writing scholarly articles and books to expand knowledge and stay updated with recent developments." },
  { title: "Sports",   desc: "Playing badminton to maintain physical fitness and an active lifestyle." },
];
