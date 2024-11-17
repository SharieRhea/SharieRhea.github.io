import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Input } from '@angular/core';

import { Project } from '../project.class';
import { ProjectButton } from '../project-button/project-button.component';

@Component({
  selector: 'project-card',
  standalone: true,
  templateUrl : './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  imports: [CommonModule, ButtonModule, ProjectButton]
})
export class ProjectCard {
  @Input() project: Project = new Project("", "", "", "", "", [], []);
}
