import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'social-icon-link-button-component',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <a [href]="link" target="_blank" rel="noopener noreferrer">
      <p-button [icon]="icon" size="large" [rounded]="true" [outlined]="true" />
    </a>
  `,
  styles: `
    a {
      text-decoration: none;
    }

    ::ng-deep .p-button {
      padding: 0.5rem 0.5rem;
    }
  `
})
export class SocialIconLinkButtonComponent {
  @Input() icon = "";
  @Input() link = "";
}
