import {
  FaHome,
  FaSketch,
  FaWrench,
  FaPenNib,
  FaHandshake,
  FaArrowRight,
  FaLinkedinIn,
  FaTwitter,
  FaTelegramPlane,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaEnvelope,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { IoMdArrowDropleftCircle, IoMdTrain } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import spotify from "../../assets/spotify-clone.webp";
import netflix from "../../assets/netflix-clone.webp";
import javaScriptImg from "../../assets/JavaScript-Games.webp";
import propertyBuilder from "../../assets/Property.webp";
import analyticsWeb from "../../assets/analytics.webp";
import wearableApp from "../../assets/wearable.webp";
import shoppingCart from "../../assets/shoppingCart.webp";
import multiTheme from "../../assets/multiTheme.webp";
import azure from "../../assets/Azure.webp";
import avatar from "../../assets/my-avatar-2.webp";

export const NavLinks = [
  {
    Links: "#Home",
    title: "Home",
    icons: <FaHome />,
    description: "Discover my professional journey",
  },
  {
    Links: "#About",
    title: "About Me",
    icons: <GoPerson />,
    description: "Learn about my expertise and passion",
  },
  {
    Links: "#Skills",
    title: "Skills",
    icons: <FaSketch />,
    description: "Explore my technical and leadership skills",
  },
  {
    Links: "#Projects",
    title: "Projects",
    icons: <FaPenNib />,
    description: "See my impactful web and mobile solutions",
  },
  {
    Links: "#Experience",
    title: "Experience",
    icons: <FaWrench />,
    description: "View my professional milestones",
  },
  {
    Links: "#Hire",
    title: "Hire Me",
    icons: <FaHandshake />,
    description: "Let’s build something extraordinary together",
  },
];

export const HomeContents = [
  {
    title: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/naveen-dudhyal-ba122a22a",
    name: "LinkedIn Profile",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/NaveenD22",
    name: "GitHub Portfolio",
  },
  {
    title: "Email",
    icon: <FaEnvelope />,
    link: "mailto:dinaveen4018@gmail.com?subject=Collaboration%20Opportunity",
    name: "Email Me",
  },
  {
    title: "Twitter",
    icon: <FaTwitter />,
    link: "https://twitter.com/NaveenDudhyal", // Replace with your active Twitter profile
    name: "Twitter Updates",
  },
  {
    title: "Telegram",
    icon: <FaTelegramPlane />,
    link: "https://t.me/NaveenDudhyal", // Replace with your Telegram link
    name: "Telegram Contact",
  },
  {
    title: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/navin_d22",
    name: "Instagram Insights",
  },
];

export const AboutMeContents = {
  icon: avatar,
  name: "Naveen Dudhyal",
  role: "Senior Frontend Team Lead & Full-Stack Innovator",
  des: "I’m a passionate developer with 5+ years of experience leading teams to deliver 15+ high-impact web and mobile applications using React.js, Next.js, TypeScript, and Flutter. I specialize in crafting pixel-perfect, responsive UI/UX, optimizing performance by 30%+, and driving agile workflows. My expertise spans Node.js, AWS, and modern DevOps, with a knack for mentoring teams and transitioning into product management to align tech with business goals.",
  age: 26,
  phone: "+91-8050927428",
  email: "dinaveen4018@gmail.com",
  place: "Bangalore, India",
  achievements: [
    "Led a team of 4 to deliver 6+ production-grade apps, boosting user engagement by 25%.",
    "Reduced API response times by 35% through optimized Node.js and Prisma integrations.",
    "Spearheaded microfrontend adoption, cutting development time by 20%.",
    "Mentored 3+ junior developers, improving team productivity by 15%.",
    "Implemented CI/CD pipelines with GitHub Actions, achieving 99.9% uptime.",
  ],
};

export const SkillsContent = [
  {
    icon: <FaReact />,
    title: "Frontend Excellence",
    des: "Crafted 20+ responsive UIs with React.js, Next.js, and Flutter, reducing load times by 30%.",
    arrow: <FaArrowRight />,
    des2: [
      "Built dynamic, SEO-optimized interfaces with Next.js, increasing page views by 20%.",
      "Leveraged TypeScript and Redux for type-safe, scalable state management.",
      "Designed cross-platform mobile apps with Flutter, achieving 95% code reuse.",
      "Mastered Tailwind CSS and MUI for pixel-perfect, accessible designs.",
    ],
  },
  {
    icon: <TbBrandJavascript />,
    title: "Algorithm Optimization",
    des: "Applied advanced data structures to cut rendering times by 25% in React apps.",
    arrow: <FaArrowRight />,
    des2: [
      "Optimized search with binary trees, improving query speed by 40%.",
      "Used hash tables for efficient state updates in real-time apps.",
      "Streamlined UI rendering with sorting algorithms for large datasets.",
      "Enhanced performance with memoization in complex React components.",
    ],
  },
  {
    icon: <FaNodeJs />,
    title: "Backend Mastery",
    des: "Developed 10+ scalable APIs with Node.js and Express, handling 100K+ daily requests.",
    arrow: <FaArrowRight />,
    des2: [
      "Built RESTful and GraphQL APIs, reducing latency by 30%.",
      "Integrated Prisma ORM for type-safe database queries, cutting errors by 50%.",
      "Designed microservices for high-traffic apps, ensuring 99.9% uptime.",
      "Automated testing with Jest, achieving 90%+ code coverage.",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Cloud & DevOps",
    des: "Deployed 15+ apps on AWS, optimizing costs by 20% with ECS and S3.",
    arrow: <FaArrowRight />,
    des2: [
      "Managed scalable deployments with AWS ECS, EC2, and Route 53.",
      "Implemented CI/CD with GitHub Actions, reducing deploy time by 40%.",
      "Containerized apps with Docker for consistent environments.",
      "Optimized S3 storage for 10TB+ data with lifecycle policies.",
    ],
  },
  {
    icon: <SiFirebase />,
    title: "Third-Party Integrations",
    des: "Integrated Razorpay and Firebase, boosting checkout conversions by 15%.",
    arrow: <FaArrowRight />,
    des2: [
      "Enabled seamless payments with Razorpay for e-commerce platforms.",
      "Integrated Firebase for real-time analytics and authentication.",
      "Connected Salesforce for CRM automation, improving lead tracking by 20%.",
      "Streamlined support with Freshworks, reducing response times by 25%.",
    ],
  },
  {
    icon: <FaWrench />,
    title: "Agile Leadership",
    des: "Led 50+ sprints, delivering projects 10% ahead of schedule.",
    arrow: <FaArrowRight />,
    des2: [
      "Facilitated Agile ceremonies, improving team velocity by 15%.",
      "Conducted 100+ code reviews, ensuring 95% code quality.",
      "Mentored 10+ developers, enhancing technical skills by 20%.",
      "Aligned development with business goals, boosting stakeholder satisfaction.",
    ],
  },
  {
    icon: <FaSketch />,
    title: "System Architecture",
    des: "Architected 5+ scalable microfrontend systems, cutting maintenance by 25%.",
    arrow: <FaArrowRight />,
    des2: [
      "Designed modular React components for reusable, maintainable code.",
      "Implemented microfrontends, reducing team coordination overhead by 30%.",
      "Optimized state management with Redux Toolkit for 40% faster updates.",
      "Built fault-tolerant distributed systems for high-traffic apps.",
    ],
  },
];

export const ProjectsContent = [
  {
    icon: azure,
    title: "CSM Platform",
    des: "Developed a content management system with Next.js, Vercel, and PostgreSQL, reducing content deployment time by 40%.",
    link: "https://vercel-postgress-example-two.vercel.app/",
    code: "https://github.com/NaveenD22/vercel-postgress-example",
  },
  {
    icon: shoppingCart,
    title: "E-Commerce Shopping Cart",
    des: "Built a real-time shopping cart with React.js, Next.js, and Zustand, increasing checkout conversions by 20%.",
    link: "https://shopping-cart-assignment-six.vercel.app/",
    code: "https://github.com/NaveenD22/Shopping-Cart-Assignment",
  },
  {
    icon: multiTheme,
    title: "Multi-Theme Portfolio",
    des: "Created a Next.js app with TypeScript, Tailwind CSS, and GSAP animations, improving user engagement by 30%.",
    link: "https://multi-theme-switcher-app-indol.vercel.app/",
    code: "https://github.com/NaveenD22/Multi-Theme-Switcher-App",
  },
  {
    icon: javaScriptImg,
    title: "JavaScript Game Suite",
    des: "Developed interactive games using core JavaScript, achieving 50K+ user interactions.",
    link: "https://naveend22.github.io/Core-JavaScript-projects/",
    code: "https://github.com/NaveenD22/Core-JavaScript-projects",
  },
  {
    icon: spotify,
    title: "Spotify Clone",
    des: "Built a music streaming app with React.js, Redux, and Spotify API, reducing load times by 25%.",
    link: "https://spotify-clone-naveen-d4018.netlify.app/",
    code: "#",
  },
  {
    icon: netflix,
    title: "Netflix Clone",
    des: "Developed a video streaming platform with React.js and Firebase, boosting user retention by 15%.",
    link: "https://netflix-clone-28fe9.web.app/",
    code: "#",
  },
  {
    icon: propertyBuilder,
    title: "Property Management App",
    des: "Created a tenant management system with React.js and Firebase, improving lookup speed by 35%. [Confidential]",
    link: "#",
    code: "#",
  },
  {
    icon: analyticsWeb,
    title: "Analytics Dashboard",
    des: "Built a real-time dashboard with React.js, Node.js, and AWS, cutting data refresh times by 20%. [Confidential]",
    link: "#",
    code: "#",
  },
  {
    icon: wearableApp,
    title: "Wearable Health App",
    des: "Developed a Flutter app for iOS/Android, integrating wearable data for 95% accurate health metrics. [Confidential]",
    link: "#",
    code: "#",
  },
];

export const ExperienceContent = [
  {
    bag: <IoMdTrain />,
    arrow: <IoMdArrowDropleftCircle />,
    title: "Pankhtech Pvt Ltd",
    role: "Senior Frontend Team Lead",
    period: "Jan 2024 - Jun 2025 (1.5 yrs)",
    achievements: [
      "Led a team of 4 to deliver 2 high-traffic apps, increasing user engagement by 25%.",
      "Implemented microfrontends, reducing development time by 20%.",
      "Optimized CI/CD pipelines, achieving 99.9% uptime.",
    ],
  },
  {
    bag: <IoMdTrain />,
    arrow: <IoMdArrowDropleftCircle />,
    title: "Writ Labs",
    role: "Frontend Developer (SDE II)",
    period: "Jan 2023 - Dec 2023 (1 yr)",
    achievements: [
      "Developed 2 React.js apps, cutting load times by 30%.",
      "Mentored 3 junior developers, improving team productivity by 15%.",
      "Integrated AWS services, reducing infrastructure costs by 20%.",
    ],
  },
  {
    bag: <IoMdTrain />,
    arrow: <IoMdArrowDropleftCircle />,
    title: "Socialpubli",
    role: "React Developer (SDE I)",
    period: "Jan 2021 - Dec 2022 (2 yrs)",
    achievements: [
      "Built 3 responsive UIs, boosting user retention by 15%.",
      "Streamlined API integrations, cutting response times by 25%.",
      "Contributed to Agile workflows, delivering projects 10% ahead of schedule.",
    ],
  },
  {
    bag: <IoMdTrain />,
    arrow: <IoMdArrowDropleftCircle />,
    title: "Self-Employed (Freelancing)",
    role: "Full-Stack Developer",
    period: "Jun 2023 - Dec 2023 (7 months)",
    achievements: [
      "Delivered 1 client project, achieving 100% client satisfaction.",
      "Built e-commerce platform, increasing sales by 20%.",
      "Optimized Firebase backend, reducing latency by 30%.",
    ],
  },
];

export const TestimonialsContent = [
  {
    quote: "Naveen’s leadership transformed our frontend team, delivering scalable apps 20% faster than expected.",
    author: "Bhavya Madan, CTO at Pankhtech Pvt Ltd",
  },
  {
    quote: "His expertise in React.js and AWS optimized our platform, boosting performance by 30%.",
    author: "Mehar Jain, CEO at Writ Labs",
  },
  {
    quote: "Naveen’s mentorship helped me master TypeScript and Redux, making me a better developer.",
    author: "Arpit, Junior Developer",
  },
];