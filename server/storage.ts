import { 
  users, type User, type InsertUser,
  personalInfo, type PersonalInfo, type InsertPersonalInfo,
  socialLinks, type SocialLink, type InsertSocialLink,
  experience, type Experience, type InsertExperience,
  education, type Education, type InsertEducation,
  certifications, type Certification, type InsertCertification,
  skills, type Skill, type InsertSkill, type SkillsByCategory,
  projects, type Project, type InsertProject
} from "@shared/schema";
import { drizzle } from "drizzle-orm/neon-serverless";
import { neon } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import pg from "pg";

// Create new PostgreSQL client for direct operations
const client = new pg.Client({
  connectionString: process.env.DATABASE_URL!,
});

// Connect to the database
client.connect();

// Create a new database connection for Drizzle
const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Resume data
  getPersonalInfo(): Promise<PersonalInfo | undefined>;
  createPersonalInfo(info: InsertPersonalInfo): Promise<PersonalInfo>;
  updatePersonalInfo(id: number, info: Partial<InsertPersonalInfo>): Promise<PersonalInfo | undefined>;
  
  getSocialLinks(): Promise<SocialLink[]>;
  createSocialLink(link: InsertSocialLink): Promise<SocialLink>;
  deleteSocialLink(id: number): Promise<boolean>;
  
  getExperiences(): Promise<Experience[]>;
  createExperience(exp: InsertExperience): Promise<Experience>;
  
  getEducation(): Promise<Education[]>;
  createEducation(edu: InsertEducation): Promise<Education>;
  
  getCertifications(): Promise<Certification[]>;
  createCertification(cert: InsertCertification): Promise<Certification>;
  
  getSkills(): Promise<Skill[]>;
  getSkillsByCategory(): Promise<SkillsByCategory>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Seed data
  seedResumeData(): Promise<void>;
}

export class DbStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }
  
  // Personal Info methods
  async getPersonalInfo(): Promise<PersonalInfo | undefined> {
    const result = await db.select().from(personalInfo).limit(1);
    return result[0];
  }
  
  async createPersonalInfo(info: InsertPersonalInfo): Promise<PersonalInfo> {
    const result = await db.insert(personalInfo).values(info).returning();
    return result[0];
  }
  
  async updatePersonalInfo(id: number, info: Partial<InsertPersonalInfo>): Promise<PersonalInfo | undefined> {
    const result = await db.update(personalInfo).set(info).where(eq(personalInfo.id, id)).returning();
    return result[0];
  }
  
  // Social Links methods
  async getSocialLinks(): Promise<SocialLink[]> {
    return await db.select().from(socialLinks);
  }
  
  async createSocialLink(link: InsertSocialLink): Promise<SocialLink> {
    const result = await db.insert(socialLinks).values(link).returning();
    return result[0];
  }
  
  async deleteSocialLink(id: number): Promise<boolean> {
    const result = await db.delete(socialLinks).where(eq(socialLinks.id, id)).returning();
    return result.length > 0;
  }
  
  // Experience methods
  async getExperiences(): Promise<Experience[]> {
    return await db.select().from(experience).orderBy(experience.order);
  }
  
  async createExperience(exp: InsertExperience): Promise<Experience> {
    const result = await db.insert(experience).values(exp).returning();
    return result[0];
  }
  
  // Education methods
  async getEducation(): Promise<Education[]> {
    return await db.select().from(education).orderBy(education.order);
  }
  
  async createEducation(edu: InsertEducation): Promise<Education> {
    const result = await db.insert(education).values(edu).returning();
    return result[0];
  }
  
  // Certification methods
  async getCertifications(): Promise<Certification[]> {
    return await db.select().from(certifications).orderBy(certifications.order);
  }
  
  async createCertification(cert: InsertCertification): Promise<Certification> {
    const result = await db.insert(certifications).values(cert).returning();
    return result[0];
  }
  
  // Skills methods
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills).orderBy(skills.order);
  }
  
  async getSkillsByCategory(): Promise<SkillsByCategory> {
    const allSkills = await this.getSkills();
    
    return {
      programmingLanguages: allSkills.filter(skill => skill.category === 'programmingLanguages'),
      databases: allSkills.filter(skill => skill.category === 'databases'),
      cloudDevOps: allSkills.filter(skill => skill.category === 'cloudDevOps'),
      architecture: allSkills.filter(skill => skill.category === 'architecture')
    };
  }
  
  async createSkill(skill: InsertSkill): Promise<Skill> {
    const result = await db.insert(skills).values(skill).returning();
    return result[0];
  }
  
  // Projects methods
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.order);
  }
  
  async createProject(project: InsertProject): Promise<Project> {
    const result = await db.insert(projects).values(project).returning();
    return result[0];
  }
  
  // Seed data method
  async seedResumeData(): Promise<void> {
    const resumeData = {
      personalInfo: {
        name: "Alex Chen",
        title: "Senior Software Architect",
        bio: "A passionate software architect with 12+ years of experience building complex, scalable systems. Specialized in cloud architecture, microservices, and leading engineering teams to deliver high-performance solutions.",
        location: "San Francisco, CA",
        email: "alex.chen@devarchitect.com",
        phone: "(415) 555-7890",
        linkedin: "https://linkedin.com/in/alexchen",
        expertise: ["Cloud Architecture", "Distributed Systems", "API Design", "System Optimization", "Tech Leadership"]
      },
      
      socialLinks: [
        {
          name: "GitHub",
          url: "https://github.com/alexchen",
          icon: "github"
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/alexchen",
          icon: "linkedin"
        },
        {
          name: "Twitter",
          url: "https://twitter.com/alexchen",
          icon: "twitter"
        },
        {
          name: "Stack Overflow",
          url: "https://stackoverflow.com/users/alexchen",
          icon: "stack-overflow" 
        }
      ],
      
      experience: [
        {
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
          order: 1
        },
        {
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
          order: 2
        },
        {
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
          order: 3
        }
      ],
      
      education: [
        {
          institution: "Stanford University",
          degree: "M.S. Computer Science",
          period: "2010 - 2012",
          description: "Specialized in Distributed Systems and Machine Learning with research focus on consensus algorithms.",
          subjects: ["Distributed Systems", "Machine Learning", "Advanced Algorithms"],
          order: 1
        },
        {
          institution: "UC Berkeley",
          degree: "B.S. Computer Science",
          period: "2006 - 2010",
          description: "Graduated summa cum laude with focus on systems programming and parallel computing.",
          subjects: ["Systems Programming", "Operating Systems", "Parallel Computing"],
          order: 2
        }
      ],
      
      certifications: [
        {
          name: "AWS Solutions Architect Professional",
          issuer: "Amazon Web Services",
          year: "2022",
          order: 1
        },
        {
          name: "Certified Kubernetes Administrator (CKA)",
          issuer: "Cloud Native Computing Foundation",
          year: "2021",
          order: 2
        },
        {
          name: "Google Professional Cloud Architect",
          issuer: "Google Cloud",
          year: "2020",
          order: 3
        },
        {
          name: "Hashicorp Terraform Certified",
          issuer: "HashiCorp",
          year: "2019",
          order: 4
        }
      ],
      
      skills: [
        { category: "programmingLanguages", name: "Rust", level: "Expert", percentage: 95, order: 1 },
        { category: "programmingLanguages", name: "Go", level: "Expert", percentage: 90, order: 2 },
        { category: "programmingLanguages", name: "Scala", level: "Advanced", percentage: 85, order: 3 },
        { category: "programmingLanguages", name: "TypeScript", level: "Advanced", percentage: 80, order: 4 },
        { category: "programmingLanguages", name: "Python", level: "Advanced", percentage: 80, order: 5 },
        
        { category: "databases", name: "PostgreSQL", level: "Expert", percentage: 90, order: 1 },
        { category: "databases", name: "ClickHouse", level: "Expert", percentage: 90, order: 2 },
        { category: "databases", name: "MongoDB", level: "Advanced", percentage: 85, order: 3 },
        { category: "databases", name: "Redis", level: "Expert", percentage: 90, order: 4 },
        
        { category: "cloudDevOps", name: "Kubernetes", level: "Expert", percentage: 95, order: 1 },
        { category: "cloudDevOps", name: "AWS", level: "Expert", percentage: 90, order: 2 },
        { category: "cloudDevOps", name: "Terraform", level: "Expert", percentage: 90, order: 3 },
        { category: "cloudDevOps", name: "CI/CD", level: "Advanced", percentage: 85, order: 4 },
        { category: "cloudDevOps", name: "Prometheus/Grafana", level: "Advanced", percentage: 85, order: 5 },
        
        { category: "architecture", name: "Microservices", level: "Expert", percentage: 95, order: 1 },
        { category: "architecture", name: "Event-Driven Architecture", level: "Expert", percentage: 90, order: 2 },
        { category: "architecture", name: "Distributed Systems", level: "Expert", percentage: 95, order: 3 },
        { category: "architecture", name: "API Design", level: "Advanced", percentage: 85, order: 4 }
      ],
      
      projects: [
        {
          name: "Distributed Streaming Platform",
          description: "Architected a high-throughput streaming data processing platform handling 100K+ events/second with sub-100ms latency. Implemented fault tolerance and automatic recovery mechanisms.",
          technologies: ["Rust", "Kafka", "ClickHouse", "Kubernetes"],
          url: "#",
          order: 1
        },
        {
          name: "Multi-Region Kubernetes Platform",
          description: "Designed multi-region Kubernetes infrastructure with automated failover capabilities. Implemented service mesh for advanced traffic routing and circuit breaking.",
          technologies: ["Kubernetes", "Istio", "Terraform", "Go"],
          url: "#",
          order: 2
        },
        {
          name: "Financial Data Analytics Engine",
          description: "Built real-time analytics engine for financial data processing with complex aggregations and compliance requirements. Optimized query performance achieving 50x improvement.",
          technologies: ["Scala", "Spark", "Cassandra", "Grafana"],
          url: "#",
          order: 3
        },
        {
          name: "Secure Healthcare API Gateway",
          description: "Developed HIPAA-compliant API gateway with advanced authentication, authorization, and audit logging capabilities. Implemented zero-trust architecture with mutual TLS.",
          technologies: ["Go", "Envoy", "OAuth2", "PostgreSQL"],
          url: "#",
          order: 4
        }
      ]
    };

    // Check if we already have data
    const existingInfo = await this.getPersonalInfo();
    if (existingInfo) {
      console.log("Resume data already exists, skipping seed");
      return;
    }

    // Insert personal info
    await this.createPersonalInfo(resumeData.personalInfo);
    
    // Insert social links
    for (const link of resumeData.socialLinks) {
      await this.createSocialLink(link);
    }
    
    // Insert experiences
    for (const exp of resumeData.experience) {
      await this.createExperience(exp);
    }
    
    // Insert education
    for (const edu of resumeData.education) {
      await this.createEducation(edu);
    }
    
    // Insert certifications
    for (const cert of resumeData.certifications) {
      await this.createCertification(cert);
    }
    
    // Insert skills
    for (const skill of resumeData.skills) {
      await this.createSkill(skill);
    }
    
    // Insert projects
    for (const project of resumeData.projects) {
      await this.createProject(project);
    }
    
    console.log("Successfully seeded resume data");
  }
}

export const storage = new DbStorage();
