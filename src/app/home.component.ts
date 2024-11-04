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
import { SocialIconLinkButtonComponent as SocialIconLinkButtonComponent } from "./social-icon-link-button.component";
import { ProjectCardComponent } from "./project-card.component";

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [
    CommonModule,
    SocialLinkButtonComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    NavigationBarComponent,
    ProjectShowcaseComponent,
    SocialLinkButtonComponent,
    SocialIconLinkButtonComponent,
    ProjectCardComponent
],
  template: `
    <nav>
      <navigation-bar-component/>
    </nav>
    <header>
      <h2 [ngClass]="device">Hi there, I'm</h2>
      <h1 [ngClass]="device">SHARIE RHEA</h1>
    </header>
    <p class="subtitle" *ngIf="device == deviceEnum.Default">A computer science student, driven learner, and jack-of-all-trades.</p>
    <section id="social-links" >
      <social-link-button-component *ngIf="device == deviceEnum.Default else mobileSocialsLinks" label="GitHub" link="https://github.com/SharieRhea"/>
      <social-link-button-component *ngIf="device == deviceEnum.Default" label="LinkedIn" link="https://www.linkedin.com/in/sharierhea"/>
      <ng-template #mobileSocialsLinks>
        <social-icon-link-button-component icon="pi pi-github" link="https://github.com/SharieRhea"/>
        <social-icon-link-button-component icon="pi pi-linkedin" link="https://www.linkedin.com/in/sharierhea"/>
      </ng-template>
    </section>
    <main>
      <project-showcase-component *ngIf="device == deviceEnum.Default else mobileProjectCards"/>
      <ng-template #mobileProjectCards>
        <project-card-component title="Track Tagger" link="https://github.com/SharieRhea/TrackTagger"/>
      </ng-template>
    </main>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    main {
      width: 80%;
    }

    #social-links {
      display: flex;
      gap: 1rem;
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
