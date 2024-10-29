import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SocialLinkButtonComponent } from './social-link-button.component';
import { ButtonModule } from 'primeng/button';
import { NavigationBarComponent } from './navigation-bar.component';
import { ProjectShowcaseComponent } from './project-showcase.component';
import { Device } from './device.enum';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [CommonModule, SocialLinkButtonComponent, RouterOutlet, RouterLink, RouterLinkActive, ButtonModule, NavigationBarComponent, ProjectShowcaseComponent],
  template: `
    <navigation-bar-component/>
    <h2 [ngClass]="device">Hi there, I'm</h2>
    <h1 [ngClass]="device">SHARIE RHEA</h1>
    <p class="subtitle" *ngIf="device == deviceEnum.Default">A computer science student, driven learner, and jack-of-all-trades.</p>
    <div id="social-links" *ngIf="device == deviceEnum.Default">
      <social-link-button-component label="GitHub" link="https://github.com/SharieRhea"/>
      <social-link-button-component label="LinkedIn" link="https://www.linkedin.com/in/sharierhea"/>
    </div>
    <project-showcase-component *ngIf="device == deviceEnum.Default"/>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    navigation-bar-component {
      position: sticky;
      top: 0;
      z-index: 1;
    }

    project-showcase-component {
      width: 80%;
    }

    #social-links {
      display: flex;
      gap: 0.5rem;
    }
  `
})
export class HomeComponent implements OnInit {
  deviceEnum = Device;
  device = Device.Default;

  constructor(private breakpointObserver: BreakpointObserver) {}

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
