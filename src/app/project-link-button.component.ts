import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'project-link-button-component',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <a [href]="link" target="_blank" rel="noopener noreferrer">
      <p-button [label]="label" [icon]="icon" size="large"/>
    </a>
  `,
  styles: `
    :host ::ng-deep .p-button {
      border-radius: 12px;
    }

    :host ::ng-deep .p-button-icon {
      font-size: 2rem;
    }
  `
})
export class ProjectLinkButtonComponent {
  @Input() label = "";
  @Input() link = "";
  @Input() icon = "";
}
