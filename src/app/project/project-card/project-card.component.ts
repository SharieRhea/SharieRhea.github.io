import { Component, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { Project } from '../project.class';
import { ProjectButton } from '../project-button/project-button.component';
import { ProjectService } from '../project.service';

@Component({
  selector: 'project-card',
  standalone: true,
  templateUrl : './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  imports: [CommonModule, ButtonModule, ProjectButton]
})
export class ProjectCard implements OnInit {
  projectKey = input.required<string>();
  project!: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.project = this.projectService.getProjects()[this.projectKey()];
  }
}
