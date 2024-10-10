import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { SocialLinkButtonComponent } from './social-link-button.component';
import { ButtonModule } from 'primeng/button';
import { NavigationBarComponent } from './navigation-bar.component';
import { ProjectShowcaseComponent } from './project-showcase.component';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [SocialLinkButtonComponent, RouterOutlet, RouterLink, RouterLinkActive, ButtonModule, NavigationBarComponent, ProjectShowcaseComponent],
  template: `
    <navigation-bar-component/>
    <h2>Hi there, I'm</h2>
    <h1>SHARIE RHEA</h1>
    <p class="subtitle">A computer science student, driven learner, and jack-of-all-trades.</p>
    <div id="social-links">
      <social-link-button-component label="GitHub" link="https://github.com/SharieRhea"/>
      <social-link-button-component label="LinkedIn" link="https://www.linkedin.com/in/sharierhea"/>
    </div>
    <project-showcase-component />
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    navigation-bar-component {
      position: sticky;
      top: 8px;
    }

    #social-links {
      display: flex;
      gap: 0.5rem;
    }
  `
})
export class HomeComponent {
  title = 'sharierhea.dev';
}
