import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';
import { ProjectCardComponent } from '../project-card/project-card';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects-section',
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section id="projects" class="projects">
      <div class="projects__container">
        <h2 class="projects__title">Show Case</h2>
        <div class="projects__divider"></div>
        <div class="projects__grid">
          <app-project-card
            *ngFor="let project of projects$ | async; trackBy: trackByProjectId"
            [project]="project">
          </app-project-card>
        </div>
      </div>
    </section>
  `,
  styleUrl: './projects-section.scss'
})
export class ProjectsSectionComponent implements OnInit {
  projects$!: Observable<Project[]>;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects$ = this.projectsService.getProjects();
  }

  trackByProjectId(index: number, project: Project): string {
    return project.id;
  }
}
