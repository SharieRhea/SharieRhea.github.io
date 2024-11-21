import { Component, OnInit } from "@angular/core";
import { NavigationBar } from "../navigation-bar/navigation-bar.component";
import { ProjectService } from "./project.service";
import { CommonModule } from "@angular/common";

import { Device } from "../device.enum";
import { ProjectCard } from "./project-card/project-card.component";

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

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
     this.projectKeys = Object.keys(this.projectService.getProjects());
     console.log(this.projectKeys);
  }
}
