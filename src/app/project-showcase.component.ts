import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ProjectLinkButtonComponent } from './project-link-button.component';

@Component({
  selector: 'project-showcase-component',
  standalone: true,
  imports: [CommonModule, ProjectLinkButtonComponent, ButtonModule],
  template: `
    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
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
       <section class="technologies">
        <p-button [raised]="true" [text]="true" [rounded]="true">
          <i class="devicon-python-plain"></i>
        </p-button>
        <p-button icon="pi pi-book" [raised]="true" [text]="true" [rounded]="true"/>
      </section>
      </div>
    </div>
  `,
  styles: `
    :host {
      margin: 2rem;
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

    .technologies {
      display: flex;
      gap: 1rem;
    }

    i {
      font-size: 2rem;
    }

    ::ng-deep .technologies .p-button {
      height: 4rem;
      width: 4rem;
      padding: 25%;
    }

    ::ng-deep .pi {
      font-size: 2rem;
    }

  `
})
export class ProjectShowcaseComponent {}
