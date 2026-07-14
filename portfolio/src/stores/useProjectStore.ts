import { create } from 'zustand';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  githubUrl?: string;
}

interface ProjectStore {
  projects: Project[];
  addProject: (newProject: Omit<Project, 'id'>) => void;
  removeProject: (id: string) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [
    {
      id: '1',
      title: 'Dynamic Portfolio SPA',
      description: 'A dynamic portfolio website built with React and Vite.',
      tags: ['React', 'Vite', 'JavaScript'],
      githubUrl: 'https://github.com/N8NAS/GDGoC_Explorer-WD20.git',
    },
    {
      id: '2',
      title: 'Sanflix',
      description: 'A personal streaming platform project using React, MySQL, FastAPI, and others',
      tags: ['React', 'FastAPI', 'MySQL'],
      githubUrl: 'https://github.com/N8NAS/Website.git',
    },
  ],
  addProject: (newProject) => 
    set((state) => ({ 
      projects: [...state.projects, { ...newProject, id: Date.now().toString() }] 
    })),
  removeProject: (id) => 
    set((state) => ({ 
      projects: state.projects.filter((p) => p.id !== id) 
    })),
}));
