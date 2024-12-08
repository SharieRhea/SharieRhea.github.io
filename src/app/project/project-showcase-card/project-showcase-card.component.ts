import { Component, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { Project } from '../project.class';
import { ProjectButton } from '../project-button/project-button.component';
import { ProjectService } from '../project.service';
import { Device } from '../../device.enum';

@Component({
  selector: 'project-showcase-card',
  standalone: true,
  templateUrl: './project-showcase-card.component.html',
  styleUrls: ['./project-showcase-card.component.css'],
  imports: [CommonModule, ButtonModule, ProjectButton],
})
export class ProjectShowcaseCard implements OnInit {
  projectKey = input.required<string>();
  project!: Project;
  Device = Device;
  device = Device.Default;

  constructor(private breakpointObserver: BreakpointObserver, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.project = this.projectService.getProjects()[this.projectKey()];

    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe(result => {
      const breakpoints = result.breakpoints;

      if (breakpoints[Breakpoints.HandsetPortrait])
        this.device = Device.Phone;
      else if (breakpoints[Breakpoints.TabletPortrait])
        this.device = Device.Tablet;
      else
        this.device = Device.Default;
    });
  }
}
