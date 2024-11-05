import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLinkButtonComponent } from './project-link-button.component';
import { ButtonModule } from 'primeng/button';
import { Input } from '@angular/core';

@Component({
  selector: 'project-card-component',
  standalone: true,
  imports: [CommonModule, ProjectLinkButtonComponent, ButtonModule],
  template: `
    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    <section class="container">
      <project-link-button-component [label]="title" [link]="link" icon="pi pi-github"/>
      <section class="description">
        <p>A graphical application for editing .mp3 metadata.</p>
        <p> Last.fm is queried using an API key to provide automatic fetching of tags, album title and artist, and album cover.</p>
        <ul>
          <li>graphical user interface (GUI) using the customtkinter library</li>
          <li>interacts with last.fm to query track information using their REST API</li>
          <li>highly customizable with options for manually entering fields</li>
        </ul>
      </section>
      <section class="technologies">
        <p-button [raised]="true" [text]="true" [rounded]="true">
          <i class="devicon-python-plain"></i>
        </p-button>
        <p-button icon="pi pi-book" [raised]="true" [text]="true" [rounded]="true"/>
      </section>
    </section>
  `,
  styles: `
    :host {
      margin: 2rem;
    }

    .container {
      background: linear-gradient(140deg, rgb(21, 39, 70) 0%, rgb(42, 60, 96) 100%);
      max-width: 100%;
      padding: 1rem;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .technologies {
      display: flex;
      gap: 1rem;
    }

    i {
      font-size: 1.5rem;
    }

    ::ng-deep .technologies .p-button {
      height: 3rem;
      width: 3rem;
      padding: 25%;
    }

    ::ng-deep .technologies .pi {
      font-size: 1.5rem;
    }
  `
})
export class ProjectCardComponent {
  @Input() title = "";
  @Input() link = "";
}
