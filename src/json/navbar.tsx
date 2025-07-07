export const menuItems = [
  { name: "Company", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Life at Gsoft", href: "#" },
];


type ServiceItem = {
  name: string;
  slug: string;
};

type ServiceSection = {
  title: string;
  items: ServiceItem[];
};


export const serviceSections : ServiceSection[] = [
  {
    title: "Development",
    items: [
      { name: "Web App Development", slug: "web-app-development" },
      { name: "Back-End Development", slug: "backend-development" },
      { name: "Mobile App Development", slug: "mobile-app-development" },
      { name: "AI/ML Development", slug: "ai-ml" },
    ],
  },
  {
    title: "Design",
    items: [
      { name: "UI/UX Design Services", slug: "ui-ux-design" },
      { name: "Website Design", slug: "website-design" },
      { name: "Mobile App Design", slug: "mobile-app" },
      { name: "Logo Design", slug: "logo-design" },
    ],
  },
  {
    title: "Other Services",
    items: [
      { name: "DevOps Services", slug: "devops" },
      { name: "Cloud Services", slug: "cloud-services" },
      { name: "Team Augmentation", slug: "team-augmentation" },
    ],
  },
  {
    title: "How We Work",
    items: [
      { name: "Discover", slug: "" },
      { name: "Planning & Designing", slug: "" },
      { name: "Development & Testing", slug: "" },
      { name: "Deploy & Support", slug: "" },
    ],
  },
];
