import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'social-link-button-component',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <a [href]="link" target="_blank" rel="noopener noreferrer" class="p-button p-button-outlined p-button-rounded">
      {{ label }}
    </a>
  `,
  styles: `
    a {
      text-decoration: none;
    }

    .p-button {
      padding: 0.5rem 1.25rem;
    }
  `
})
export class SocialLinkButtonComponent {
  @Input() label = "";
  @Input() link = "";
}
