import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLinkButtonComponent } from './project-link-button.component';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'project-showcase-component',
  standalone: true,
  imports: [CommonModule, ProjectLinkButtonComponent, ChipModule],
  template: `
    <!-- TODO: switch to semantic html or completely refactor -->
    <div class="showcase-container">
    <img src="images/test-image.jpg" alt="" class="fade-out"/>
      <div class="content-container">
        <project-link-button-component label="Track Tagger" link="https://github.com/SharieRhea/TrackTagger" icon="pi pi-github"/>
        <div>
          <p>A graphical application for editing .mp3 metadata.</p>
          <p> Last.fm is queried using an API key to provide automatic fetching of tags, album title and artist, and album cover.</p>
          <ul>
            <li>graphical user interface (GUI) using the customtkinter library</li>
            <li>interacts with last.fm to query track information using their REST API</li>
            <li>highly customizable with options for manually entering fields</li>
          </ul>
        </div>
        <p-chip label="Test" icon="pi pi-apple" />
      </div>
    </div>
  `,
  styles: `
    :host {
      margin: 2rem;
      border: 1px solid blue;
    }

    .showcase-container {
      position: relative;
    }

    .content-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 3rem;
      position: absolute;
      top: 1rem;
      left: 1rem;
      right: 1rem;
      bottom: 1rem;
    }

    .fade-out {
      mask-image: linear-gradient(270deg, rgba(0,0,0,1), rgba(0,0,0,.4), rgba(0,0,0,0));
      max-width: 100%;
    }
  `
})
export class ProjectShowcaseComponent {}
