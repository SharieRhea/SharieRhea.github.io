import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

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
  projectKeys!: string[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectKeys = Object.keys(this.projectService.getProjects());
  }
}
