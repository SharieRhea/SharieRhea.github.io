import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { ProjectShowcase } from './project/project-showcase/project-showcase.component';
import { Projects } from './project/projects.component';

export const routes: Routes = [
  { path: "projects/:projectKey", component: ProjectShowcase },
  { path: "projects", component: Projects },
  { path: "home", component: Home },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];
