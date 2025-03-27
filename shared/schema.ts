import { pgTable, text, serial, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const personalInfo = pgTable("personal_info", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  bio: text("bio").notNull(),
  location: text("location").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  linkedin: text("linkedin").notNull(),
  expertise: text("expertise").array().notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

export const socialLinks = pgTable("social_links", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  url: text("url").notNull(),
  icon: text("icon").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  title: text("title").notNull(),
  period: text("period").notNull(),
  description: text("description").notNull(),
  achievements: text("achievements").array().notNull(),
  technologies: text("technologies").array().notNull(),
  order: integer("order").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  institution: text("institution").notNull(),
  degree: text("degree").notNull(),
  period: text("period").notNull(),
  description: text("description").notNull(),
  subjects: text("subjects").array().notNull(),
  order: integer("order").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  issuer: text("issuer").notNull(),
  year: text("year").notNull(),
  order: integer("order").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  name: text("name").notNull(),
  level: text("level").notNull(),
  percentage: integer("percentage").notNull(),
  order: integer("order").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  technologies: text("technologies").array().notNull(),
  url: text("url").notNull(),
  order: integer("order").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPersonalInfoSchema = createInsertSchema(personalInfo).omit({
  id: true,
  created_at: true,
});

export const insertSocialLinkSchema = createInsertSchema(socialLinks).omit({
  id: true,
  created_at: true,
});

export const insertExperienceSchema = createInsertSchema(experience).omit({
  id: true,
  created_at: true,
});

export const insertEducationSchema = createInsertSchema(education).omit({
  id: true,
  created_at: true,
});

export const insertCertificationSchema = createInsertSchema(certifications).omit({
  id: true,
  created_at: true,
});

export const insertSkillSchema = createInsertSchema(skills).omit({
  id: true,
  created_at: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  created_at: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertPersonalInfo = z.infer<typeof insertPersonalInfoSchema>;
export type PersonalInfo = typeof personalInfo.$inferSelect;

export type InsertSocialLink = z.infer<typeof insertSocialLinkSchema>;
export type SocialLink = typeof socialLinks.$inferSelect;

export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type Experience = typeof experience.$inferSelect;

export type InsertEducation = z.infer<typeof insertEducationSchema>;
export type Education = typeof education.$inferSelect;

export type InsertCertification = z.infer<typeof insertCertificationSchema>;
export type Certification = typeof certifications.$inferSelect;

export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type Skill = typeof skills.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

// Helper type for grouping skills by category
export type SkillsByCategory = {
  programmingLanguages: Skill[];
  databases: Skill[];
  cloudDevOps: Skill[];
  architecture: Skill[];
};
