import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProjectsComponent } from './projects/projects'
import { BlogComponent } from './blog/blog';
import { PageNotFound} from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blogs', component: BlogComponent },
  { path: '**', component: PageNotFound },
  { path: 'blogs/:id', component: BlogComponent },
];
