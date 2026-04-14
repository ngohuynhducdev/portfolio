// ─── Personal Information ────────────────────────────────────────────────────
export const PERSONAL_INFO = {
  name: "Duc Ngo",
  title: "Web Developer",
  bio: "I craft beautiful, functional web experiences that solve real problems. Specialized in modern web technologies and creating seamless user interfaces.",
  aboutBio: [
    "With over 5 years of experience in web development, I specialize in creating modern, responsive, and user-friendly websites. My expertise spans across front-end and back-end technologies, enabling me to deliver complete web solutions.",
    "I'm passionate about clean code, elegant design, and crafting digital experiences that make a difference. Whether it's a complex web application or a simple landing page, I bring creativity and technical excellence to every project.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and staying updated with the latest industry trends.",
  ],
  avatar:
    "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  email: "duc.ngo@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  cvUrl: "/cv.pdf",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
} as const;

// ─── Stats ───────────────────────────────────────────────────────────────────
export const STATS = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
] as const;

// ─── Tech Stack (Hero ticker) ─────────────────────────────────────────────────
export const TECH_STACK = [
  { label: "HTML", emoji: "🌐" },
  { label: "CSS", emoji: "🎨" },
  { label: "JavaScript", emoji: "⚡" },
  { label: "React", emoji: "⚛️" },
  { label: "Node.js", emoji: "🟢" },
  { label: "Next.js", emoji: "▲" },
] as const;

// ─── Skills ──────────────────────────────────────────────────────────────────
export const SKILLS = {
  frontend: [
    { name: "HTML5", level: 95 },
    { name: "CSS3 / Sass", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "React", level: 88 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 82 },
    { name: "Tailwind CSS", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 87 },
    { name: "Express.js", level: 85 },
    { name: "PHP", level: 78 },
    { name: "Laravel", level: 75 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 82 },
    { name: "REST APIs", level: 90 },
  ],
  tools: [
    { name: "Figma", level: 92 },
    { name: "Git / GitHub", level: 88 },
    { name: "Firebase", level: 85 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 72 },
    { name: "Webpack", level: 78 },
    { name: "Jest", level: 80 },
  ],
} as const;

// ─── Services ────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    title: "Website Development",
    description:
      "Custom, responsive websites built with modern technologies. From simple landing pages to complex web applications.",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with users in mind. Creating seamless experiences that drive engagement.",
  },
  {
    title: "E-commerce Websites",
    description:
      "Full-featured online stores with secure payment integration, inventory management, and order tracking.",
  },
  {
    title: "Mobile App UI",
    description:
      "Responsive mobile interfaces that work flawlessly across all devices and screen sizes.",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website's visibility and ranking on search engines with proven SEO strategies.",
  },
  {
    title: "Web Maintenance",
    description:
      "Ongoing support, updates, and maintenance to keep your website running smoothly and securely.",
  },
] as const;

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: "Modern E-commerce Platform",
    description:
      "A full-featured e-commerce solution with payment integration and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1567016544554-1e9c8b1a7c8b?w=800&q=80",
    category: "Web",
    caseStudyUrl: "#",
  },
  {
    title: "Portfolio Website Design",
    description:
      "Creative portfolio website with smooth animations and modern UI.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?w=800&q=80",
    category: "Design",
    caseStudyUrl: "#",
  },
] as const;

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar:
      "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?w=200&q=80",
    rating: 5,
    quote:
      "Working with John was a pleasure. He understood our vision perfectly and brought it to life with stunning design and smooth functionality. Highly recommended!",
  },
  {
    name: "Michael Chen",
    role: "Founder, Creative Studios",
    avatar:
      "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?w=200&q=80",
    rating: 5,
    quote:
      "John transformed our e-commerce platform completely. Sales have increased by 40% since the redesign. His expertise in both design and development is impressive.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, ShopNow",
    avatar:
      "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?w=200&q=80",
    rating: 5,
    quote:
      "Professional, responsive, and incredibly talented. John delivered our complex web application on time and within budget. A true professional!",
  },
  {
    name: "David Thompson",
    role: "CTO, DataFlow Systems",
    avatar:
      "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?w=200&q=80",
    rating: 5,
    quote:
      "John delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise is outstanding. Our online presence has never been better!",
  },
] as const;

// ─── Blog Posts ───────────────────────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    title: "Getting Started with React 18: New Features and Updates",
    excerpt:
      "Explore the latest features in React 18 including concurrent rendering, automatic batching, and new hooks.",
    category: "React",
    date: "Nov 15, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?w=800&q=80",
  },
  {
    title: "Building Responsive Websites with Tailwind CSS",
    excerpt:
      "Learn how to create beautiful, responsive designs quickly and efficiently using Tailwind CSS utility classes.",
    category: "CSS",
    date: "Nov 10, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?w=800&q=80",
  },
  {
    title: "Node.js Best Practices for Production Applications",
    excerpt:
      "Discover essential best practices for building scalable and maintainable Node.js applications.",
    category: "Node.js",
    date: "Nov 5, 2025",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1566915896913-549d796d2166?w=800&q=80",
  },
  {
    title: "Modern UI/UX Design Trends for 2025",
    excerpt:
      "Stay ahead of the curve with the latest UI/UX design trends that are shaping the digital landscape.",
    category: "Design",
    date: "Oct 28, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1616418534243-ab757ff8ce3a?w=800&q=80",
  },
  {
    title: "TypeScript Tips and Tricks for Better Code",
    excerpt:
      "Enhance your TypeScript skills with these practical tips that will help you write cleaner, more maintainable code.",
    category: "TypeScript",
    date: "Oct 20, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?w=800&q=80",
  },
  {
    title: "Optimizing Web Performance: A Complete Guide",
    excerpt:
      "Learn proven strategies to optimize your website's performance, from reducing load times to improving UX.",
    category: "Performance",
    date: "Oct 15, 2025",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?w=800&q=80",
  },
] as const;
