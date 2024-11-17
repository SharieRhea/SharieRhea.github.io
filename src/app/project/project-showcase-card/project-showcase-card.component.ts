import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { Project } from '../project.class';
import { ProjectButton } from '../project-button/project-button.component';

@Component({
  selector: 'project-showcase-card',
  standalone: true,
  templateUrl: './project-showcase-card.component.html',
  styleUrls: ['./project-showcase-card.component.css'],
  imports: [CommonModule, ButtonModule, ProjectButton],
})
export class ProjectShowcaseCard {
  @Input() project: Project = new Project("", "", "", "", "", [], []);
}
