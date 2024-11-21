import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { ProjectShowcase } from './project/project-showcase/project-showcase.component';

export const routes: Routes = [
  { path: "projects/:projectKey", component: ProjectShowcase },
  { path: "home", component: Home },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];
