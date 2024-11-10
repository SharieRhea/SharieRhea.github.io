import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLinkButtonComponent } from './project-link-button.component';
import { ButtonModule } from 'primeng/button';
import { Input } from '@angular/core';
import { Project } from './project.class';

@Component({
  selector: 'project-card-component',
  standalone: true,
  imports: [CommonModule, ProjectLinkButtonComponent, ButtonModule],
  template: `
    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    <section id="container">
      <project-link-button-component [label]="project.title" [link]="project.link" icon="pi pi-github"/>
      <section id="description">
        <p>{{ project.subtitle }}</p>
        <p>{{ project.description }}</p>
        <ul>
          <li *ngFor="let bullet of project.bullets">
            {{bullet}}
          </li>
        </ul>
      </section>
      <section id="technologies">
        <p-button class="technology-icon" *ngFor="let icon of project.technologies" [raised]="true" [text]="true" [rounded]="true">
          <i [class]="icon[1]"></i>
        </p-button>
      </section>
    </section>
  `,
  styles: `
    :host {
      margin: 2rem;
    }

    ul {
      padding-left: 1rem;
    }

    #container {
      background: linear-gradient(140deg, rgb(21, 39, 70) 0%, rgb(42, 60, 96) 100%);
      max-width: 100%;
      padding: 1rem;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    #technologies {
      display: flex;
      gap: 1rem;
    }

    i {
      font-size: 1.5rem;
    }

    ::ng-deep #technologies .technology-icon .p-button {
      height: 3rem;
      width: 3rem;
      padding: 25%;
    }

    ::ng-deep #technologies .pi {
      font-size: 1.5rem;
    }
  `
})
export class ProjectCardComponent {
  @Input() project: Project = new Project("", "", "", "", [], []);
}
