import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLinkButtonComponent } from './project-link-button.component';

@Component({
  selector: 'project-showcase-component',
  standalone: true,
  imports: [CommonModule, ProjectLinkButtonComponent],
  template: `
    <project-link-button-component label="Track Tagger" link="https://github.com/SharieRhea/TrackTagger" icon="pi pi-github"/>
    <img src="images/test-image.jpg" alt="" class="fade-out"/>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      margin: 2rem;
    }

    .fade-out {
      mask-image: linear-gradient(270deg, rgba(0,0,0,1), rgba(0,0,0,.4), rgba(0,0,0,0));
    }

    img {
      max-width: 80%;
    }
  `
})
export class ProjectShowcaseComponent {}
