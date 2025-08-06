import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model'; // Corrected path
import { GithubIconComponent } from '../github-icon/github-icon'; // Corrected path

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, GithubIconComponent],
  template: `
    <div class="projects__card">
      <img
        [src]="project.imageUrl"
        [alt]="project.imageAlt"
        class="projects__card-image"
        loading="lazy">
      <div class="projects__card-content">
        <h3 class="projects__card-title">{{ project.title }}</h3>
        <p class="projects__card-description">{{ project.description }}</p>
        <div class="projects__card-actions">
          <a
            *ngIf="project.demoUrl"
            [href]="project.demoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="projects__card-demo-link">
            {{ project.demoLabel || 'Demo' }}
          </a>
          <a
            [href]="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="projects__card-github-link"
            [attr.aria-label]="'View ' + project.title + ' on GitHub'">
            <app-github-icon></app-github-icon>
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrl: './project-card.scss'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
