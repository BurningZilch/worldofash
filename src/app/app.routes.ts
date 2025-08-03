import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProjectsComponent } from './projects/projects';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  // Optional: Add a 404 Not Found route
  { path: '**', redirectTo: '' }
];
