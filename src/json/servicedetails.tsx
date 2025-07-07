export type Section = {
  title: string;
  description: string;
  image: string;
  bullets?: string[];
};

export type Service = {
  slug: string;
  sections: Section[];
};

export const serviceDetails: Service[] = [
  {
    slug: "website-design",
    sections: [
      {
        title: "Beautiful Websites",
        description: "We design stunning websites tailored to your brand identity, optimized for conversion.",
        image: "/images/services/servicedetail/customwebdesign.png",
        bullets: ["Responsive design", "SEO optimized", "Custom animations"]
      },
      {
        title: "User-Centric Design",
        description: "Every layout is carefully crafted to guide users and boost engagement.",
        image: "/images/services/servicedetail/responsivewebdesign.png",
        bullets: ["Intuitive navigation", "Modern aesthetics"]
      },
       {
        title: "Beautiful Websites",
        description: "We design stunning websites tailored to your brand identity, optimized for conversion.",
        image: "/images/services/servicedetail/customwebdesign.png",
        bullets: ["Responsive design", "SEO optimized", "Custom animations"]
      },
      {
        title: "User-Centric Design",
        description: "Every layout is carefully crafted to guide users and boost engagement.",
        image: "/images/services/servicedetail/responsivewebdesign.png",
        bullets: ["Intuitive navigation", "Modern aesthetics"]
      },
      
    ]
  },
  {
    slug: "mobile-app",
    sections: [
      {
        title: "Mobile App Design",
        description: "Crafting delightful UI/UX for mobile apps that users love.",
        image: "/images/services/servicedetail/mobileapp.png",
        bullets: ["iOS & Android", "Human-centered design"]
      },
      {
        title: "Wireframes to Mockups",
        description: "We handle the entire design process from wireframes to polished prototypes.",
       image: "/images/services/servicedetail/mobileapp.png",
        bullets: ["Rapid prototyping", "Interactive demos"]
      },


       {
        title: "Mobile App Design",
        description: "Crafting delightful UI/UX for mobile apps that users love.",
        image: "/images/services/servicedetail/mobileapp.png",
        bullets: ["iOS & Android", "Human-centered design"]
      },
      {
        title: "Wireframes to Mockups",
        description: "We handle the entire design process from wireframes to polished prototypes.",
       image: "/images/services/servicedetail/mobileapp.png",
        bullets: ["Rapid prototyping", "Interactive demos"]
      }
    ]
  },
  {
    slug: "ai-ml",
    sections: [
      {
        title: "AI & Machine Learning",
        description: "Leverage AI to automate, predict, and scale your business capabilities.",
        image: "/images/services/servicedetail/AIML.png",
        bullets: ["Predictive analytics", "Chatbots", "Data mining"]
      },
      {
        title: "Custom Algorithms",
        description: "We develop tailor-made ML models to solve your unique challenges.",
        image: "/images/services/servicedetail/AIML.png",
        bullets: ["Data engineering", "Model training & deployment"]
      },


       {
        title: "AI & Machine Learning",
        description: "Leverage AI to automate, predict, and scale your business capabilities.",
        image: "/images/services/servicedetail/AIML.png",
        bullets: ["Predictive analytics", "Chatbots", "Data mining"]
      },
      {
        title: "Custom Algorithms",
        description: "We develop tailor-made ML models to solve your unique challenges.",
        image: "/images/services/servicedetail/AIML.png",
        bullets: ["Data engineering", "Model training & deployment"]
      }
    ]
  },
  {
    slug: "mobile-app-development",
    sections: [
      {
        title: "Robust Mobile Apps",
        description: "We build high-performance mobile applications tailored to your business goals.",
        image: "/images/services/servicedetail/mobileapp.png",
        bullets: ["Cross-platform", "Native apps", "API integration"]
      },
      {
        title: "Wireframes to Mockups",
        description: "We handle the entire design process from wireframes to polished prototypes.",
       image: "/images/services/servicedetail/mobileapp.png",
        bullets: ["Rapid prototyping", "Interactive demos"]
      },


       {
        title: "Mobile App Design",
        description: "Crafting delightful UI/UX for mobile apps that users love.",
        image: "/images/services/servicedetail/mobileapp.png",
        bullets: ["iOS & Android", "Human-centered design"]
      },
      {
        title: "Wireframes to Mockups",
        description: "We handle the entire design process from wireframes to polished prototypes.",
       image: "/images/services/servicedetail/mobileapp.png",
        bullets: ["Rapid prototyping", "Interactive demos"]
      }
    ]
    
  },
  {
    slug: "backend-development",
    sections: [
      {
        title: "Solid Back-End Systems",
        description: "We architect reliable, secure, and scalable back-end systems.",
        image: "/images/services/servicedetail/backend.png",
        bullets: ["RESTful APIs", "Database design", "Authentication & security"]
      },
       {
        title: "Solid Back-End Systems",
        description: "We architect reliable, secure, and scalable back-end systems.",
        image: "/images/services/servicedetail/backend.png",
        bullets: ["RESTful APIs", "Database design", "Authentication & security"]
      },
       {
        title: "Solid Back-End Systems",
        description: "We architect reliable, secure, and scalable back-end systems.",
        image: "/images/services/servicedetail/backend.png",
        bullets: ["RESTful APIs", "Database design", "Authentication & security"]
      },
       {
        title: "Solid Back-End Systems",
        description: "We architect reliable, secure, and scalable back-end systems.",
        image: "/images/services/servicedetail/backend.png",
        bullets: ["RESTful APIs", "Database design", "Authentication & security"]
      }
    ]
  },
  {
    slug: "web-app-development",
    sections: [
      {
        title: "Powerful Web Apps",
        description: "Building interactive, scalable web applications that work seamlessly.",
        image: "/images/services/servicedetail/mobileapp.png",
        bullets: ["React, Next.js", "Server-side rendering", "Progressive Web Apps"]
      },
       {
        title: "Beautiful Websites",
        description: "We design stunning websites tailored to your brand identity, optimized for conversion.",
        image: "/images/services/servicedetail/customwebdesign.png",
        bullets: ["Responsive design", "SEO optimized", "Custom animations"]
      },
      {
        title: "User-Centric Design",
        description: "Every layout is carefully crafted to guide users and boost engagement.",
        image: "/images/services/servicedetail/responsivewebdesign.png",
        bullets: ["Intuitive navigation", "Modern aesthetics"]
      },
      
    ]
  },
  {
    slug: "ui-ux-design",
    sections: [
      {
        title: "Exceptional UI/UX",
        description: "We design engaging user experiences that keep customers coming back.",
        image: "/images/services/servicedetail/uidesign.png",
        bullets: ["User research", "Interactive prototypes", "Usability testing"]
      },
       {
        title: "Exceptional UI/UX",
        description: "We design engaging user experiences that keep customers coming back.",
        image: "/images/services/servicedetail/uidesign.png",
        bullets: ["User research", "Interactive prototypes", "Usability testing"]
      },
       {
        title: "Exceptional UI/UX",
        description: "We design engaging user experiences that keep customers coming back.",
        image: "/images/services/servicedetail/uidesign.png",
        bullets: ["User research", "Interactive prototypes", "Usability testing"]
      },
       {
        title: "Exceptional UI/UX",
        description: "We design engaging user experiences that keep customers coming back.",
        image: "/images/services/servicedetail/uidesign.png",
        bullets: ["User research", "Interactive prototypes", "Usability testing"]
      }
    ]
  },
  {
    slug: "devops",
    sections: [
      {
        title: "DevOps Solutions",
        description: "Automate your infrastructure and deployments with our DevOps expertise.",
        image: "/images/services/servicedetail/devops.png",
        bullets: ["CI/CD pipelines", "Cloud deployment", "Monitoring & logging"]
      },
       {
        title: "Beautiful Websites",
        description: "We design stunning websites tailored to your brand identity, optimized for conversion.",
        image: "/images/services/servicedetail/customwebdesign.png",
        bullets: ["Responsive design", "SEO optimized", "Custom animations"]
      },
      {
        title: "User-Centric Design",
        description: "Every layout is carefully crafted to guide users and boost engagement.",
        image: "/images/services/servicedetail/responsivewebdesign.png",
        bullets: ["Intuitive navigation", "Modern aesthetics"]
      },
      
    ]
  },
  {
    slug: "logo-design",
    sections: [
      {
        title: "Memorable Logos",
        description: "We create unique logos that define your brand identity.",
        image: "/images/services/servicedetail/logodesign.png",
        bullets: ["Multiple concepts", "Revisions included", "Brand guidelines"]
      },
      {
        title: "Brand Development",
        description: "Beyond logos, we craft your entire visual identity.",
       image: "/images/services/servicedetail/logodesign.png",
        bullets: ["Color palettes", "Typography choices"]
      },



       {
        title: "Memorable Logos",
        description: "We create unique logos that define your brand identity.",
       image: "/images/services/servicedetail/logodesign.png",
        bullets: ["Multiple concepts", "Revisions included", "Brand guidelines"]
      },
      {
        title: "Brand Development",
        description: "Beyond logos, we craft your entire visual identity.",
        image: "/images/services/servicedetail/logodesign.png",
        bullets: ["Color palettes", "Typography choices"]
      }
      
    ]
  },
  {
    slug: "team-augmentation",
    sections: [
      {
        title: "Extend Your Team",
        description: "Quickly scale your team with our vetted developers & designers.",
        image: "/images/services/servicedetail/teamaugment.png",
        bullets: ["Flexible contracts", "Skilled professionals"]
      },
       {
        title: "Extend Your Team",
        description: "Quickly scale your team with our vetted developers & designers.",
        image: "/images/services/servicedetail/teamaugment.png",
        bullets: ["Flexible contracts", "Skilled professionals"]
      },
       {
        title: "Extend Your Team",
        description: "Quickly scale your team with our vetted developers & designers.",
        image: "/images/services/servicedetail/teamaugment.png",
        bullets: ["Flexible contracts", "Skilled professionals"]
      },
       {
        title: "Extend Your Team",
        description: "Quickly scale your team with our vetted developers & designers.",
        image: "/images/services/servicedetail/teamaugment.png",
        bullets: ["Flexible contracts", "Skilled professionals"]
      },
      
    ]
  },
  {
    slug: "cloud-services",
    sections: [
      {
        title: "Cloud Solutions",
        description: "Harness the power of the cloud for greater flexibility and efficiency.",
        image: "/images/services/servicedetail/backend.png",
        bullets: ["AWS, Azure, GCP", "Serverless architectures", "Cost optimization"]
      },


       {
        title: "Extend Your Team",
        description: "Quickly scale your team with our vetted developers & designers.",
        image: "/images/services/servicedetail/teamaugment.png",
        bullets: ["Flexible contracts", "Skilled professionals"]
      },

       {
        title: "Cloud Solutions",
        description: "Harness the power of the cloud for greater flexibility and efficiency.",
        image: "/images/services/servicedetail/backend.png",
        bullets: ["AWS, Azure, GCP", "Serverless architectures", "Cost optimization"]
      },


       {
        title: "Extend Your Team",
        description: "Quickly scale your team with our vetted developers & designers.",
        image: "/images/services/servicedetail/teamaugment.png",
        bullets: ["Flexible contracts", "Skilled professionals"]
      },
      
    ]
  }
];
