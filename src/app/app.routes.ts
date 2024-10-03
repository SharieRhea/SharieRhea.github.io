import { Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "projects", component: ProjectComponent }
];
