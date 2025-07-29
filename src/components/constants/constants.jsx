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
  FaCss3Alt,
  FaNodeJs,
  FaHtml5,
  FaEnvelope,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {  SiFirebase } from "react-icons/si";
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
import azure from "../../assets/Azure.webp";
import avatar from "../../assets/my-avatar-2.webp";
export const NavLinks = [
  {
    Links: "#Home",
    title: "Home",
    icons: <FaHome />,
  },
  {
    Links: "#About",
    title: "About me",
    icons: <GoPerson />,
  },
  {
    Links: "#Skills",
    title: "Skills",
    icons: <FaSketch />,
  },
  {
    Links: "#Projects",
    title: "Projects",
    icons: <FaPenNib />,
  },
  {
    Links: "#Experience",
    title: "Experience",
    icons: <FaWrench />,
  },
  {
    Links: "#Hire",
    title: "Hire Me",
    icons: <FaHandshake />,
  },
];
export const HomeContents = [
  {
    title: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/naveen-dudhyal-ba122a22a",
  },
  {
    title: "Twitter",
    icon: <FaTwitter />,
    link: "",
  },
  {
    title: "Email",
    icon: <FaEnvelope />,
    link: "mailto:dinaveen4018@gmail.com?subject=subject text",
  },
  {
    title: "Telegram",
    icon: <FaTelegramPlane />,
    link: "",
  },
  {
    title: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/navin_d22?r=nametag",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/NaveenD22",
  },
];
export const AboutMeContents = {
  icon: avatar,
  name: "Naveen Dudhyal",
  role: "Senior Frontend Team Lead (React.js, Next.js, Node.js, AWS)",
  des: `Senior Frontend Team Lead with 5+ years of experience leading teams to deliver web and mobile applications using React.js, Next.js, TypeScript, and Flutter. Expert in crafting responsive UI/UX with Redux, MUI, React Query, and Tailwind CSS, leveraging Google Design System Tokens. Proficient in data structures and skilled in Node.js, Express.js, and AWS. Passionate about mentoring, agile workflows, and transitioning to product management.`,
  age: 26,
  phone: 8050927428,
  email: "dinaveen4018@gmail.com",
  place: "Bangalore/Gurugram, India",
};

export const SkillsContent = [
  {
    icon: <FaReact />,
    title: "Frontend",
    des: "Expertise in JavaScript (ES6+), TypeScript, React.js, Next.js, Flutter, HTML5, CSS3, Tailwind CSS, Redux, MUI, React Query, and Google Design System Tokens",
    arrow: <FaArrowRight />,
    des2: [
      "Proficient in building responsive UIs with React.js and Next.js, optimizing performance with TypeScript and Redux",
      "Skilled in crafting dynamic interfaces using Flutter and Tailwind CSS for cross-platform compatibility",
      "Leverage MUI and React Query for state management and data fetching, enhancing user experience",
      "Expert in HTML5 and CSS3 for SEO-friendly layouts and animations, with Google Design System Tokens for consistency",
    ],
  },
  {
    icon: <TbBrandJavascript />,
    title: "Data Structures",
    des: "Utilize linked lists, binary search, and sorting algorithms for frontend optimization",
    arrow: <FaArrowRight />,
    des2: [
      "Apply linked lists to manage dynamic UI elements efficiently",
      "Use binary search for fast data filtering in React components",
      "Implement sorting algorithms to optimize rendering performance",
      "Enhance frontend scalability with data structure knowledge",
    ],
  },
  {
    icon: <FaNodeJs />,
    title: "Backend",
    des: "Skilled in Node.js, Express.js, Prisma ORM, RESTful APIs, and GraphQL",
    arrow: <FaArrowRight />,
    des2: [
      "Develop robust APIs with Node.js and Express.js for seamless integration",
      "Utilize Prisma ORM to simplify SQL queries and database management",
      "Design RESTful and GraphQL endpoints for scalable backend solutions",
      "Ensure efficient data flow between frontend and backend systems",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Cloud/DevOps",
    des: "Proficient in AWS (ECS, EC2, Route 53, S3), GitHub Actions, and Docker",
    arrow: <FaArrowRight />,
    des2: [
      "Deploy applications on AWS ECS and EC2 with Route 53 for DNS management",
      "Manage storage and scalability with AWS S3",
      "Automate workflows using GitHub Actions for CI/CD pipelines",
      "Containerize applications with Docker for consistent deployments",
    ],
  },
  {
    icon: <SiFirebase />,
    title: "Integrations",
    des: "Experienced with Razorpay, Salesforce, Freshworks, and Firebase",
    arrow: <FaArrowRight />,
    des2: [
      "Integrate payment gateways like Razorpay for e-commerce solutions",
      "Connect Salesforce and Freshworks for CRM and support automation",
      "Utilize Firebase for real-time data and authentication",
      "Ensure seamless third-party service integration in projects",
    ],
  },
  {
    icon: <FaWrench />,
    title: "Development Practices",
    des: "Expert in Agile, Git, code review, and rapid development",
    arrow: <FaArrowRight />,
    des2: [
      "Lead Agile sprints to deliver projects on time",
      "Manage version control with Git and conduct thorough code reviews",
      "Implement rapid development cycles for quick iterations",
      "Promote team collaboration through best practice adherence",
    ],
  },
  {
    icon: <GoPerson />,
    title: "Soft Skills",
    des: "Strong in leadership, mentorship, problem-solving, and product management",
    arrow: <FaArrowRight />,
    des2: [
      "Lead teams effectively, mentoring junior developers in frontend best practices",
      "Solve complex technical challenges with innovative solutions",
      "Contribute to product management by aligning designs with business goals",
      "Foster a collaborative and growth-oriented team environment",
    ],
  },
  {
    icon: <FaPenNib />,
    title: "Automation Testing",
    des: "Proficient with web-app automation tool Appium",
    arrow: <FaArrowRight />,
    des2: [
      "Automate UI testing for web applications using Appium",
      "Ensure robust test coverage for React and Next.js projects",
      "Streamline testing processes to improve deployment quality",
      "Leverage automation to reduce manual testing efforts",
    ],
  },
  {
    icon: <FaSketch />,
    title: "Frontend Architecture and Design Patterns",
    des: "Skilled in component structure, microfrontends, and state management patterns",
    arrow: <FaArrowRight />,
    des2: [
      "Design modular component structures for scalable UIs",
      "Implement microfrontends to enhance team productivity",
      "Apply state management patterns like Redux for efficiency",
      "Optimize architecture for maintainable and reusable code",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "System Design",
    des: "Expert in scalable architectures, microservices, and distributed systems",
    arrow: <FaArrowRight />,
    des2: [
      "Architect scalable systems using microservices for performance",
      "Design distributed systems for high availability and fault tolerance",
      "Plan end-to-end system workflows for complex applications",
      "Ensure robust infrastructure for large-scale deployments",
    ],
  },
];

export const ProjectsContent = [
  {
    icon: azure,
    title: "CSM Platform",
    des: "CMS project where I have used Vercel,Next.js,NextAuth and Postgrees",
    link: "https://vercel-postgress-example-two.vercel.app/",
    code:"https://github.com/NaveenD22/vercel-postgress-example"
  },
    {
    icon: shoppingCart, // Placeholder icon; replace with appropriate image if available
    title: "Shopping Cart Application",
    des: "Developed a dynamic shopping cart with React.js, Next.js, and an Observer pattern for real-time updates, featuring quantity management and a free gift threshold of $1000",
    link: "https://shopping-cart-assignment-six.vercel.app/",
    code:"https://github.com/NaveenD22/Shopping-Cart-Assignment"
  },
    {
    icon: javaScriptImg,
    title: "Core JavaScript",
    des: "What I belive and trust is JS is backbone For Every Full Stack Developer And Here I Have Used Core JS Methods and Fundaments",
    link: "https://naveend22.github.io/Core-JavaScript-projects/",
    code:"https://github.com/NaveenD22/Core-JavaScript-projects"
  },
  {
    icon: spotify,
    title: "Spotify Clone",
    des: "I'm confident enough to build such a challenging projects.Here I have learned Redux,Featching Data,Debugging",
    link: "https://spotify-clone-naveen-d4018.netlify.app/",
    code:"#"
  },
  {
    icon: propertyBuilder, // Placeholder icon; replace with appropriate image if available
    title: "Property Builder",
    des: "Created tenant management app with React.js and Firebase, enhancing lookup speed",
    link: "#",
    code:"#"
  },
  {
    icon: analyticsWeb, // Placeholder icon; replace with appropriate image if available
    title: "User Analytics Dashboard",
    des: "Developed React.js dashboard with Node.js and AWS, optimizing data rendering",
    link: "#",
    code:"#"
  },
  {
    icon: wearableApp, // Placeholder icon; replace with appropriate image if available
    title: "Wearable Health App",
    des: "Developed iOS and Android app with Flutter, integrating wearable device data for heart rate and coherence metrics",
    link: "#",
    code:"#"
  },
  {
    icon: netflix,
    title: "Netflix Clone",
    des: "Working With Api's Gives Me Lot Of Motivation and I Have Used Firebase For Authentication",
    link: "https://netflix-clone-28fe9.web.app/",
    code:"#"
  },


];
export const ExperiencContent = [
  {
    bag: <IoMdTrain />,
    arrow: <IoMdArrowDropleftCircle />,
    title: "Socialpubli Influencer Marketing Company",
    role: "React Developer (SDE I)",
    period: "Jan 2021 - Dec 2022 (2yrs)",
  },
  {
    bag: <IoMdTrain />,
    arrow: <IoMdArrowDropleftCircle />,
    title: "Writ Labs",
    role: "Frontend Developer (SDE II)",
    period: "Jan 2023 - Dec 2023 (1yr)",
  },
  {
    bag: <IoMdTrain />,
    arrow: <IoMdArrowDropleftCircle />,
    title: "Pankhtech Pvt Ltd (Sychedelic)",
    role: "Senior Frontend Team Lead",
    period: "Jan 2024 - Jun 2025 (1.5yrs)",
  },
  {
    bag: <IoMdTrain />,
    arrow: <IoMdArrowDropleftCircle />,
    title: "Self-Employed (Freelancing)",
    role: "SDE",
    period: "8 months",
  },
];