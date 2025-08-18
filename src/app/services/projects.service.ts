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
      title: 'DK-DINO',
      description: 'Developed as part of a university assignment, this project extends the capabilities of the GrovePi platform by implementing legacy animation support.',
      imageUrl: 'assets/img/dino.png',
      imageAlt: 'image of prototype',
      githubUrl: 'https://github.com/BurningZilch/DK-DINO'
    },
    {
      id: '2',
      title: 'BLE-jamming-simulation',
      description: 'a university assessment that simulates how Bluetooth Low Energy (BLE) jamming interference impacts the performance of a machine learning model.',
      imageUrl: 'assets/img/BLE.png',
      imageAlt: 'matlab simulation',
      githubUrl: 'https://github.com/BurningZilch/BLE-jamming-simulation'
    },
    {
      id: '3',
      title: 'Climate Map',
      description: 'a visualization that visualize climate change in from 1850 worldwide. Currently focus on temperature, will add more dimension in future. ',
      imageUrl: 'https://placehold.co/600x400/1f2937/ffffff?text=Coming Soon',
      imageAlt: 'climate Map',
      demoLabel: 'Live Demo',
      githubUrl: '',
      demoUrl: '/project1'
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
