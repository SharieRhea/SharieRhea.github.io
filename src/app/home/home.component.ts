import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Device } from "../device.enum";
import { ProjectService } from "../project/project.service";
import { Project } from "../project/project.class";
import { NavigationBar } from "../navigation-bar/navigation-bar.component";

import { ProjectCard } from "../project/project-card/project-card.component";
import { ProjectShowcaseCard } from "../project/project-showcase-card/project-showcase-card.component";
import { SocialButton } from "../social/social-button/social-button.component";
import { SocialIconButton } from "../social/social-icon-button/social-icon-link-button.component";

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    NavigationBar,
    ProjectCard,
    ProjectShowcaseCard,
    SocialButton,
    SocialIconButton
  ],
})
export class Home implements OnInit {
  Device = Device;
  device = Device.Default;
  projects: Project[] = []

  constructor(private breakpointObserver: BreakpointObserver, projectService: ProjectService) {
    this.projects = projectService.getProjects();
  }

  ngOnInit() {
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
