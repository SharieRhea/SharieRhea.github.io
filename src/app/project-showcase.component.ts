import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ProjectLinkButtonComponent } from './project-link-button.component';
import { Project } from './project.class';

@Component({
  selector: 'project-showcase-component',
  standalone: true,
  imports: [CommonModule, ProjectLinkButtonComponent, ButtonModule],
  template: `
    <section id="showcase-container">
    <img src="images/test-image.jpg" alt="" class="fade-out"/>
      <section id="content-container">
        <project-link-button-component [label]="project.title" [link]="project.link" icon="pi pi-github"/>
        <section>
          <p>{{ project.subtitle }}</p>
          <p>{{ project.description }}</p>
          <ul>
            <li *ngFor="let bullet of project.bullets">
              {{bullet}}
            </li>
          </ul>
        </section>
       <section id="technologies">
        <p-button *ngFor="let icon of project.technologies" [label]="icon[0]" [raised]="true" [text]="true" [rounded]="true">
          <i [class]="icon[1]"></i>
        </p-button>
      </section>
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

    #showcase-container {
      position: relative;
    }

    #content-container {
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

    #technologies {
      display: flex;
      gap: 1rem;
    }

    i {
      font-size: 1.5rem;
      padding-right: 0.75rem;
    }

    ::ng-deep .pi {
      font-size: 2rem;
    }

  `
})
export class ProjectShowcaseComponent {
  @Input() project: Project = new Project("", "", "", "", [], [])
}
