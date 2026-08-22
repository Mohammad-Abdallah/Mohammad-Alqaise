export type IconName =
  | "brain"
  | "code"
  | "spark"
  | "people"
  | "globe"
  | "eye"
  | "stage"
  | "heart";

export type SocialIconName = "instagram" | "linkedin" | "github";

export type PortfolioImage = {
  src: string;
  alt: string;
  fit: "cover" | "contain";
};

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tags: string[];
  icon: IconName;
  image?: PortfolioImage;
};

// Update image extensions or filenames here if your files differ.
export const portfolioImages = {
  profile: {
    src: "/images/1.jpg",
    alt: "Portrait of Mohammad Abdalla",
    fit: "cover",
  },
  masarArts: {
    src: "/images/2.png",
    alt: "Masar Arts logo",
    fit: "contain",
  },
  interactiveSpotlight: {
    src: "/images/3.jpg",
    alt: "Interactive Spotlight computer vision project",
    fit: "cover",
  },
} satisfies Record<string, PortfolioImage>;

// Update social URLs here. All external links open in a new tab.
export const socialLinks: Array<{
  label: string;
  href: string;
  icon: SocialIconName;
}> = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mohammad.abdalla.m/",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammad-abdalla-mohammad/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/Mohammad-Abdallah",
    icon: "github",
  },
];

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "AI & Data",
    icon: "brain" as IconName,
    description: "Intelligent systems grounded in practical use.",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Data Analysis",
      "Python",
    ],
  },
  {
    title: "Software Development",
    icon: "code" as IconName,
    description: "Reliable products from interface to database.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "API Development",
      "Full-Stack Development",
    ],
  },
  {
    title: "Creative Technology",
    icon: "spark" as IconName,
    description: "Technology designed for spaces, stories, and people.",
    skills: [
      "Interactive Systems",
      "Theatre Technology",
      "Projection",
      "Stage Technology",
      "Digital Arts",
      "QLab",
      "Creative Coding",
    ],
  },
  {
    title: "Product & Collaboration",
    icon: "people" as IconName,
    description: "Clear thinking across users, teams, and delivery.",
    skills: [
      "User Research",
      "Product Thinking",
      "Project Coordination",
      "Communication",
      "Problem Solving",
      "Cultural Innovation",
    ],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "Masar Arts",
    category: "Digital Platform / Cultural Technology",
    description:
      "A digital platform connecting Palestinian artists and cultural organizations with opportunities, resources, events, equipment, spaces, and networks.",
    highlights: [
      "Built core platform features using Next.js, Supabase, and PostgreSQL",
      "Designed user flows for artists, organizations, and international partners",
      "Developed opportunities, profiles, equipment, events, and public listings",
      "Conducted interviews with artists and cultural organizations",
      "Preparing the platform for a focused pilot testing phase",
    ],
    tags: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Full-Stack",
      "User Research",
      "Cultural Tech",
    ],
    icon: "globe",
    image: portfolioImages.masarArts,
  },
  {
    number: "02",
    title: "Interactive Spotlight",
    category: "Computer Vision / Theatre Technology",
    description:
      "A computer vision prototype for automatic performer tracking in stage lighting—connecting engineering, theatre, and interactive performance.",
    highlights: [
      "Explored camera-based performer tracking for live stages",
      "Used Raspberry Pi, Python, OpenCV, and servo movement",
      "Connected engineering with theatre technology",
      "Built a practical experiment in creative automation",
    ],
    tags: [
      "Computer Vision",
      "OpenCV",
      "Python",
      "Raspberry Pi",
      "Theatre Tech",
    ],
    icon: "eye",
    image: portfolioImages.interactiveSpotlight,
  },
  {
    number: "03",
    title: "Theatre & Creative Technology",
    category: "Live Performance / Technical Production",
    description:
      "Hands-on work across theatre, stage technology, lighting, sound, projection, and live performance environments.",
    highlights: [
      "Supported technical production in theatre contexts",
      "Collaborated with artists and production teams",
      "Operated and troubleshot technical setups",
      "Combined creative production with technical problem solving",
    ],
    tags: [
      "Theatre Technology",
      "Lighting",
      "Sound",
      "Projection",
      "Creative Production",
    ],
    icon: "stage",
  },
];

export const experience = [
  {
    title: "Founder & Software Developer",
    organization: "Masar Arts",
    location: "Oslo / Remote",
    description:
      "Building a cultural technology platform for artists and organizations, combining software development, user research, and cultural sector knowledge.",
  },
  {
    title: "Theatre Technician / Creative Technology Assistant",
    organization: "Nordic Black Theatre",
    location: "Oslo, Norway",
    description:
      "Supporting theatre technology and live performance production, including lighting, sound, projection, and technical operations.",
  },
  {
    title: "Theatre Artist / Youth Trainer",
    organization: "The Freedom Theatre / Community Arts Work",
    location: "Palestine",
    description:
      "Experience in theatre, youth training, community arts, performance, and cultural work.",
  },
];

export const education = [
  {
    degree: "Master’s degree in Artificial Intelligence",
    school: "Kristiania University of Applied Sciences",
    location: "Oslo, Norway",
    detail: "Current",
  },
  {
    degree: "Bachelor’s degree in Computer Systems Engineering",
    school: "Arab American University",
    location: "Palestine",
    detail:
      "Graduation project: Interactive Spotlight — computer vision-based automatic performer tracking for stage lighting.",
  },
];

export const services = [
  {
    title: "Websites & platforms",
    description:
      "Full-stack digital products shaped around real users and clear outcomes.",
    icon: "globe" as IconName,
  },
  {
    title: "AI tools & automation",
    description:
      "Practical AI concepts, prototypes, and workflows that solve useful problems.",
    icon: "brain" as IconName,
  },
  {
    title: "Creative prototypes",
    description:
      "Interactive experiments connecting code, physical spaces, and performance.",
    icon: "spark" as IconName,
  },
  {
    title: "Computer vision",
    description:
      "Camera-based experiments for tracking, interaction, and live environments.",
    icon: "eye" as IconName,
  },
  {
    title: "Theatre & media tech",
    description:
      "Technical setups for lighting, sound, projection, and live production.",
    icon: "stage" as IconName,
  },
  {
    title: "Impact technology",
    description:
      "Digital systems supporting cultural organizations and communities.",
    icon: "heart" as IconName,
  },
];

export const contact = {
  email: "[ADD_EMAIL_HERE]",
  cv: "[ADD_CV_LINK_HERE]",
};
