import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from "@angular/common";

import { Device } from "../device.enum";
import { ProjectCard } from "./project-card/project-card.component";
import { NavigationBar } from "../navigation-bar/navigation-bar.component";
import { ProjectService } from "./project.service";

@Component({
  selector: 'projects',
  standalone: true,
  templateUrl : './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [NavigationBar, CommonModule, ProjectCard]
})
export class Projects implements OnInit {
  Device = Device;
  device = Device.Default;
  projectKeys!: string[];

  constructor(private breakpointObserver: BreakpointObserver, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectKeys = Object.keys(this.projectService.getProjects());
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
