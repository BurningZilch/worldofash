import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: '1',
      title: 'Personal Blog',
      description: 'Welcome to the World of Ash — a space where I share my learning journey, projects, and tech explorations in Azure, GitHub, machine learning, and more.',
      imageUrl: 'https://placehold.co/600x400/1f2937/ffffff?text=Project1',
      imageAlt: '项目1截图',
      demoUrl: 'https://burningzilch.github.io/',
      githubUrl: 'https://github.com/BurningZilch/BurningZilch.github.io',
      demoLabel: 'Blog'
    },
    {
      id: '2',
      title: 'DK-DINO',
      description: 'Developed as part of a university assignment, this project extends the capabilities of the GrovePi platform by implementing legacy animation support.',
      imageUrl: 'https://placehold.co/600x400/1f2937/ffffff?text=Project2',
      imageAlt: '项目2截图',
      githubUrl: 'https://github.com/BurningZilch/DK-DINO'
    },
    {
      id: '3',
      title: 'BLE-jamming-simulation',
      description: 'a university assessment that simulates how Bluetooth Low Energy (BLE) jamming interference impacts the performance of a machine learning model.',
      imageUrl: 'https://placehold.co/600x400/1f2937/ffffff?text=Project3',
      imageAlt: '项目3截图',
      githubUrl: 'https://github.com/BurningZilch/BLE-jamming-simulation'
    }
    // New placeholder project for testing

  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    const project = this.projects.find(p => p.id === id);
    return of(project);
  }

  addProject(project: Omit<Project, 'id'>): void {
    const newProject: Project = {
      ...project,
      id: (this.projects.length + 1).toString()
    };
    this.projects.push(newProject);
  }

  updateProject(id: string, updatedProject: Partial<Project>): void {
    const index = this.projects.findIndex(p => p.id === id);
    if (index !== -1) {
      this.projects[index] = { ...this.projects[index], ...updatedProject };
    }
  }

  deleteProject(id: string): void {
    this.projects = this.projects.filter(p => p.id !== id);
  }
}
