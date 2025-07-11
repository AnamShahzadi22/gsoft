export type JobDetail = {
  title: string;
  intro: string;
  skills: string[];
  responsibilities: string[];
};

export const jobDetails: Record<string, JobDetail> = {
  "back-end-developer-at-global-software-consulting": {
    title: "Back-End (Node.js) Developer",
    intro:
      "We're expanding our development team and looking for a passionate Back-End Developer to join us. You'll be responsible for building reliable, scalable server-side applications and databases that power seamless user experiences.",
    skills: [
      "Hands-on experience with Node.js, Express.js, NestJS, or Strapi",
      "Database knowledge: MySQL, PostgreSQL, MongoDB",
      "Strong JavaScript and TypeScript skills, with familiarity in Webpack and ES6",
      "Experience working with RESTful and GraphQL APIs",
      "Understanding of Agile methodologies and CI/CD pipelines; experience with Docker, containerization, and AWS is a plus",
    ],
    responsibilities: [
      "Collaborate with front-end developers and cross-functional teams to integrate user-facing elements with server-side logic",
      "Analyze and improve existing code, processes, and systems to ensure performance and reliability",
      "Contribute to the design and development of new features and enhancements based on industry trends and user needs",
      "Write clean, scalable, and well-documented code to develop functional web applications",
      "Stay updated with emerging technologies and share knowledge within the team",
    ],
  },

  "front-end-developer-at-global-software-consulting": {
    title: "Front-End (React.js) Developer",
    intro:
      "We're seeking a talented Front-End Developer to join our growing team. You’ll be working on modern, scalable interfaces and transforming design mockups into seamless, responsive web applications.",
    skills: [
      "React.js / Next.js",
      "Redux, Hooks, Context API",
      "RESTful APIs and GraphQL",
      "UI Libraries: Material UI, Bootstrap, Tailwind",
      "Testing frameworks like Jest",
      "HTML, CSS, SASS / LESS",
      "Front-end tools: NPM, Webpack, Babel",
      "Nice to have: Git, JIRA, AWS, Heroku",
    ],
    responsibilities: [
      "Build pixel-perfect, responsive UIs using React.js and Next.js",
      "Develop new features and maintain existing products",
      "Translate Figma or design files into functional interfaces using HTML/CSS/JS frameworks",
      "Integrate frontend with REST and GraphQL APIs",
      "Optimize websites for SEO and performance",
      "Write and maintain automated tests",
    ],
  },

  "machine-learning-artificial-intelligence-developer-at-global-software-consulting": {
    title: "Machine Learning / AI Developer",
    intro:
      "We're looking for a skilled ML/AI Developer to help build smart systems and solutions that can enhance user experience and business automation through data-driven insights.",
    skills: [
      "2+ years of software engineering experience",
      "Proficiency in Python or JavaScript",
      "Hands-on with OpenAI, ChatGPT, and PyTorch",
      "Strong grasp of ML/AI use-case design and business application",
      "Experience with TensorFlow and Meta AI is a plus",
    ],
    responsibilities: [
      "Collaborate with product and engineering teams to understand data requirements",
      "Evaluate and select ML algorithms based on use-case fit and success metrics",
      "Prepare datasets and select appropriate data representation methods",
      "Run experiments and fine-tune ML models",
      "Perform statistical analysis and performance optimization",
      "Extend and customize existing ML frameworks",
      "Fine-tune pre-trained models with custom datasets",
    ],
  },

  "business-development-manager-at-global-software-consulting": {
    title: "Business Development Manager",
    intro:
      "We're seeking a driven Business Development Manager to grow our client base across freelancing platforms, manage leads, and pitch solutions to global customers.",
    skills: [
      "Strong knowledge of freelancing platforms like Upwork, Fiverr, Freelancer",
      "Effective sales pitching and bidding strategies",
      "Clear and customer-focused written & verbal communication",
      "Ability to assess risks and suggest mitigation strategies",
    ],
    responsibilities: [
      "Prepare project proposals and SOWs for client opportunities",
      "Create and deliver sales pitches via email and phone",
      "Lead generation and relationship management with new and existing clients",
      "Track daily bidding and lead status reports",
      "Follow up regularly with clients to ensure conversion",
      "Schedule and participate in client meetings",
      "Work closely with the sales team to meet monthly revenue targets",
    ],
  },
};
