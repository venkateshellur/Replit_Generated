export const resumeData = {
  personalInfo: {
    id: 1,
    name: "Alex Chen",
    title: "Senior Software Architect",
    bio: "A passionate software architect with 12+ years of experience building complex, scalable systems. Specialized in cloud architecture, microservices, and leading engineering teams to deliver high-performance solutions.",
    location: "San Francisco, CA",
    email: "alex.chen@devarchitect.com",
    phone: "(415) 555-7890",
    linkedin: "https://linkedin.com/in/alexchen",
    expertise: ["Cloud Architecture", "Distributed Systems", "API Design", "System Optimization", "Tech Leadership"],
    created_at: new Date().toISOString()
  },
  
  socialLinks: [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/alexchen",
      icon: "github",
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      name: "LinkedIn",
      url: "https://linkedin.com/in/alexchen",
      icon: "linkedin",
      created_at: new Date().toISOString()
    },
    {
      id: 3,
      name: "Twitter",
      url: "https://twitter.com/alexchen",
      icon: "twitter",
      created_at: new Date().toISOString()
    },
    {
      id: 4,
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/alexchen",
      icon: "stack-overflow",
      created_at: new Date().toISOString()
    }
  ],
  
  experience: [
    {
      id: 1,
      company: "TechScale Solutions",
      title: "Principal Software Architect",
      period: "2019 - Present",
      description: "Leading architecture initiatives for cloud-native applications serving millions of users. Driving technical vision across multiple product teams.",
      achievements: [
        "Redesigned the core platform using microservices, increasing scalability by 500%",
        "Implemented a CI/CD pipeline that reduced deployment time from days to minutes",
        "Led migration to Kubernetes with zero downtime, saving $1.2M in operational costs"
      ],
      technologies: ["Kubernetes", "Go", "gRPC", "AWS", "Terraform"],
      order: 1,
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      company: "DataSphere Inc.",
      title: "Lead Backend Engineer",
      period: "2016 - 2019",
      description: "Architected high-throughput data processing systems handling petabytes of data for financial services clients.",
      achievements: [
        "Built real-time data processing pipeline handling 50,000 events/second",
        "Implemented distributed tracing reducing MTTR from hours to minutes",
        "Developed automated failover system achieving 99.999% uptime"
      ],
      technologies: ["Rust", "Kafka", "ClickHouse", "Redis", "Docker"],
      order: 2,
      created_at: new Date().toISOString()
    },
    {
      id: 3,
      company: "CodeVerse",
      title: "Senior Software Engineer",
      period: "2013 - 2016",
      description: "Developed distributed systems for mission-critical healthcare applications with strict compliance requirements.",
      achievements: [
        "Created HIPAA-compliant data storage system for patient records",
        "Built fault-tolerant message broker for inter-service communication",
        "Implemented performance optimizations reducing API response time by 70%"
      ],
      technologies: ["Scala", "Akka", "PostgreSQL", "RabbitMQ", "ElasticSearch"],
      order: 3,
      created_at: new Date().toISOString()
    }
  ],
  
  education: [
    {
      id: 1,
      institution: "Stanford University",
      degree: "M.S. Computer Science",
      period: "2010 - 2012",
      description: "Specialized in Distributed Systems and Machine Learning with research focus on consensus algorithms.",
      subjects: ["Distributed Systems", "Machine Learning", "Advanced Algorithms"],
      order: 1,
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      institution: "UC Berkeley",
      degree: "B.S. Computer Science",
      period: "2006 - 2010",
      description: "Graduated summa cum laude with focus on systems programming and parallel computing.",
      subjects: ["Systems Programming", "Operating Systems", "Parallel Computing"],
      order: 2,
      created_at: new Date().toISOString()
    }
  ],
  
  certifications: [
    {
      id: 1,
      name: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      year: "2022",
      order: 1,
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      year: "2021",
      order: 2,
      created_at: new Date().toISOString()
    },
    {
      id: 3,
      name: "Google Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2020",
      order: 3,
      created_at: new Date().toISOString()
    },
    {
      id: 4,
      name: "Hashicorp Terraform Certified",
      issuer: "HashiCorp",
      year: "2019",
      order: 4,
      created_at: new Date().toISOString()
    }
  ],
  
  skills: {
    programmingLanguages: [
      { id: 1, category: "programmingLanguages", name: "Rust", level: "Expert", percentage: 95, order: 1, created_at: new Date().toISOString() },
      { id: 2, category: "programmingLanguages", name: "Go", level: "Expert", percentage: 90, order: 2, created_at: new Date().toISOString() },
      { id: 3, category: "programmingLanguages", name: "Scala", level: "Advanced", percentage: 85, order: 3, created_at: new Date().toISOString() },
      { id: 4, category: "programmingLanguages", name: "TypeScript", level: "Advanced", percentage: 80, order: 4, created_at: new Date().toISOString() },
      { id: 5, category: "programmingLanguages", name: "Python", level: "Advanced", percentage: 80, order: 5, created_at: new Date().toISOString() }
    ],
    databases: [
      { id: 6, category: "databases", name: "PostgreSQL", level: "Expert", percentage: 90, order: 1, created_at: new Date().toISOString() },
      { id: 7, category: "databases", name: "ClickHouse", level: "Expert", percentage: 90, order: 2, created_at: new Date().toISOString() },
      { id: 8, category: "databases", name: "MongoDB", level: "Advanced", percentage: 85, order: 3, created_at: new Date().toISOString() },
      { id: 9, category: "databases", name: "Redis", level: "Expert", percentage: 90, order: 4, created_at: new Date().toISOString() }
    ],
    cloudDevOps: [
      { id: 10, category: "cloudDevOps", name: "Kubernetes", level: "Expert", percentage: 95, order: 1, created_at: new Date().toISOString() },
      { id: 11, category: "cloudDevOps", name: "AWS", level: "Expert", percentage: 90, order: 2, created_at: new Date().toISOString() },
      { id: 12, category: "cloudDevOps", name: "Terraform", level: "Expert", percentage: 90, order: 3, created_at: new Date().toISOString() },
      { id: 13, category: "cloudDevOps", name: "CI/CD", level: "Advanced", percentage: 85, order: 4, created_at: new Date().toISOString() },
      { id: 14, category: "cloudDevOps", name: "Prometheus/Grafana", level: "Advanced", percentage: 85, order: 5, created_at: new Date().toISOString() }
    ],
    architecture: [
      { id: 15, category: "architecture", name: "Microservices", level: "Expert", percentage: 95, order: 1, created_at: new Date().toISOString() },
      { id: 16, category: "architecture", name: "Event-Driven Architecture", level: "Expert", percentage: 90, order: 2, created_at: new Date().toISOString() },
      { id: 17, category: "architecture", name: "Distributed Systems", level: "Expert", percentage: 95, order: 3, created_at: new Date().toISOString() },
      { id: 18, category: "architecture", name: "API Design", level: "Advanced", percentage: 85, order: 4, created_at: new Date().toISOString() }
    ]
  },
  
  projects: [
    {
      id: 1,
      name: "Distributed Streaming Platform",
      description: "Architected a high-throughput streaming data processing platform handling 100K+ events/second with sub-100ms latency. Implemented fault tolerance and automatic recovery mechanisms.",
      technologies: ["Rust", "Kafka", "ClickHouse", "Kubernetes"],
      url: "#",
      order: 1,
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      name: "Multi-Region Kubernetes Platform",
      description: "Designed multi-region Kubernetes infrastructure with automated failover capabilities. Implemented service mesh for advanced traffic routing and circuit breaking.",
      technologies: ["Kubernetes", "Istio", "Terraform", "Go"],
      url: "#",
      order: 2,
      created_at: new Date().toISOString()
    },
    {
      id: 3,
      name: "Financial Data Analytics Engine",
      description: "Built real-time analytics engine for financial data processing with complex aggregations and compliance requirements. Optimized query performance achieving 50x improvement.",
      technologies: ["Scala", "Spark", "Cassandra", "Grafana"],
      url: "#",
      order: 3,
      created_at: new Date().toISOString()
    },
    {
      id: 4,
      name: "Secure Healthcare API Gateway",
      description: "Developed HIPAA-compliant API gateway with advanced authentication, authorization, and audit logging capabilities. Implemented zero-trust architecture with mutual TLS.",
      technologies: ["Go", "Envoy", "OAuth2", "PostgreSQL"],
      url: "#",
      order: 4,
      created_at: new Date().toISOString()
    }
  ]
};