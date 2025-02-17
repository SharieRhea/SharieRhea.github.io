import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { ProjectShowcase } from './project/project-showcase/project-showcase.component';
import { Projects } from './project/projects.component';
import { About } from './about/about.component';
import { QrCodes } from './qr/qrcodes.component';

export const routes: Routes = [
  // test pages for quasher
  { path: "qr", component: QrCodes},

  { path: "projects/:projectKey", component: ProjectShowcase },
  { path: "about", component: About },
  { path: "projects", component: Projects },
  { path: "home", component: Home },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];
