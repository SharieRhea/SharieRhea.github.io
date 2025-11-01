import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { ProjectShowcase } from './project/project-showcase/project-showcase.component';
import { Projects } from './project/projects.component';
import { About } from './about/about.component';
import { Faq } from './faq/faq.component';

export const routes: Routes = [
  { path: "faq", component: Faq },
  { path: "projects/:projectKey", component: ProjectShowcase },
  { path: "about", component: About },
  { path: "projects", component: Projects },
  { path: "home", component: Home },
  // redirect any unknown path to home
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];
