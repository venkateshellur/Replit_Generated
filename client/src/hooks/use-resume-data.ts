import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getQueryFn } from "@/lib/queryClient";

export interface ResumeDataType {
  personalInfo: {
    id: number;
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    expertise: string[];
    created_at: string;
  };
  socialLinks: Array<{
    id: number;
    name: string;
    url: string;
    icon: string;
    created_at: string;
  }>;
  experience: Array<{
    id: number;
    company: string;
    title: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
    order: number;
    created_at: string;
  }>;
  education: Array<{
    id: number;
    institution: string;
    degree: string;
    period: string;
    description: string;
    subjects: string[];
    order: number;
    created_at: string;
  }>;
  certifications: Array<{
    id: number;
    name: string;
    issuer: string;
    year: string;
    order: number;
    created_at: string;
  }>;
  skills: {
    programmingLanguages: Array<{
      id: number;
      category: string;
      name: string;
      level: string;
      percentage: number;
      order: number;
      created_at: string;
    }>;
    databases: Array<{
      id: number;
      category: string;
      name: string;
      level: string;
      percentage: number;
      order: number;
      created_at: string;
    }>;
    cloudDevOps: Array<{
      id: number;
      category: string;
      name: string;
      level: string;
      percentage: number;
      order: number;
      created_at: string;
    }>;
    architecture: Array<{
      id: number;
      category: string;
      name: string;
      level: string;
      percentage: number;
      order: number;
      created_at: string;
    }>;
  };
  projects: Array<{
    id: number;
    name: string;
    description: string;
    technologies: string[];
    url: string;
    order: number;
    created_at: string;
  }>;
}

// Fallback to the static data if necessary
import { resumeData as staticResumeData } from "@/lib/resumeData";

export function useResumeData() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['/api/resume'],
    queryFn: getQueryFn<ResumeDataType>({ on401: "returnNull" }),
  });

  // Transform the API data to match the format expected by the components
  const transformedData = data ? {
    personalInfo: data.personalInfo,
    socialLinks: data.socialLinks,
    experience: data.experience,
    education: data.education,
    certifications: data.certifications,
    skills: data.skills,
    projects: data.projects
  } : staticResumeData;

  return {
    resumeData: transformedData,
    isLoading,
    isError
  };
}