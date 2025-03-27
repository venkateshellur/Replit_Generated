export const resumeData = {
  personalInfo: {
    name: "John Doe",
    title: "Software Architect",
    bio: "Senior Software Architect with 12+ years of experience designing and implementing robust, scalable software solutions across multiple industries. Passionate about creating efficient, maintainable architecture that solves complex business problems.",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    linkedin: "https://linkedin.com/in/johndoe",
  },
  
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/johndoe",
      icon: "github"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/johndoe",
      icon: "twitter"
    }
  ],
  
  expertise: [
    "Enterprise Architecture",
    "Microservices Design",
    "Cloud Infrastructure",
    "API Design & Integration",
    "Tech Leadership"
  ],
  
  experience: [
    {
      company: "TechCorp Industries",
      title: "Lead Software Architect",
      period: "2018 - Present",
      description: "Led architecture design for enterprise-scale cloud applications serving millions of users. Defined technical vision and roadmap for a team of 25+ engineers.",
      achievements: [
        "Designed and implemented microservices architecture that improved system scalability by 300%",
        "Introduced CI/CD practices reducing deployment time from days to hours",
        "Led migration from monolith to distributed architecture with zero downtime"
      ],
      technologies: ["AWS", "Kubernetes", "Microservices", "Java"]
    },
    {
      company: "InnovateSoft",
      title: "Senior Software Engineer",
      period: "2014 - 2018",
      description: "Developed scalable backend services for financial technology products handling millions in daily transactions.",
      achievements: [
        "Architected real-time data processing pipeline using Kafka and Spark",
        "Implemented secure payment system compliant with PCI-DSS standards",
        "Mentored junior developers and introduced code review practices"
      ],
      technologies: ["Python", "Kafka", "MongoDB", "Docker"]
    },
    {
      company: "GlobalTech",
      title: "Software Developer",
      period: "2010 - 2014",
      description: "Worked on enterprise content management systems serving Fortune 500 clients.",
      achievements: [
        "Developed custom CMS solutions for healthcare and financial sectors",
        "Built RESTful APIs integrated with legacy systems",
        "Automated testing processes increasing code coverage by 40%"
      ],
      technologies: ["C#", ".NET", "SQL Server", "JavaScript"]
    }
  ],
  
  education: [
    {
      institution: "Stanford University",
      degree: "M.S. Computer Science",
      period: "2006 - 2010",
      description: "Specialized in Distributed Systems and AI. Graduated with honors, GPA 3.9/4.0.",
      subjects: ["Distributed Systems", "AI", "Algorithms"]
    },
    {
      institution: "MIT",
      degree: "B.S. Computer Engineering",
      period: "2002 - 2006",
      description: "Completed with high distinction. Focus on software engineering principles and systems design.",
      subjects: ["Software Engineering", "Data Structures", "Systems Design"]
    }
  ],
  
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2021"
    },
    {
      name: "Google Cloud Professional Architect",
      issuer: "Google Cloud",
      year: "2020"
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      year: "2019"
    },
    {
      name: "Azure Solutions Architect Expert",
      issuer: "Microsoft",
      year: "2020"
    }
  ],
  
  skills: {
    programmingLanguages: [
      { name: "Java", level: "Expert", percentage: 95 },
      { name: "Python", level: "Advanced", percentage: 85 },
      { name: "JavaScript", level: "Advanced", percentage: 80 },
      { name: "C#", level: "Intermediate", percentage: 70 },
      { name: "Go", level: "Intermediate", percentage: 65 }
    ],
    databases: [
      { name: "PostgreSQL", level: "Expert", percentage: 90 },
      { name: "MongoDB", level: "Advanced", percentage: 85 },
      { name: "Redis", level: "Advanced", percentage: 80 }
    ],
    cloudDevOps: [
      { name: "AWS", level: "Expert", percentage: 95 },
      { name: "Kubernetes", level: "Expert", percentage: 90 },
      { name: "Docker", level: "Expert", percentage: 95 },
      { name: "CI/CD", level: "Advanced", percentage: 85 },
      { name: "Terraform", level: "Advanced", percentage: 80 }
    ],
    architecture: [
      { name: "Microservices", level: "Expert", percentage: 95 },
      { name: "API Design", level: "Expert", percentage: 90 },
      { name: "Event-Driven Architecture", level: "Advanced", percentage: 85 }
    ]
  },
  
  projects: [
    {
      name: "Enterprise FinTech Platform",
      description: "Designed and led development of a microservices-based financial platform processing $50M in daily transactions. Implemented secure, scalable architecture with 99.99% uptime.",
      technologies: ["Java", "Spring Boot", "AWS", "Kafka"],
      url: "#"
    },
    {
      name: "Healthcare Data Platform",
      description: "Architected HIPAA-compliant data platform connecting 200+ healthcare providers. Implemented secure API gateway and real-time analytics dashboard.",
      technologies: ["Python", "FastAPI", "GCP", "BigQuery"],
      url: "#"
    },
    {
      name: "E-commerce Microservices Platform",
      description: "Redesigned monolithic e-commerce system into microservices architecture. Improved performance by 40% and reduced deployment time from days to minutes.",
      technologies: ["Node.js", "Kubernetes", "MongoDB", "Docker"],
      url: "#"
    },
    {
      name: "IoT Analytics Platform",
      description: "Built scalable IoT data processing platform handling 10k+ devices and millions of daily events. Implemented real-time analytics and alerting system.",
      technologies: ["Go", "Apache Kafka", "InfluxDB", "Grafana"],
      url: "#"
    }
  ]
};
