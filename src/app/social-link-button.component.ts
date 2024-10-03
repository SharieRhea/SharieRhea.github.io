import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'social-link-button-component',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <a [href]="link" target="_blank" rel="noopener noreferrer" class="p-button p-button-outlined">
      {{ label }}
    </a>
  `,
  styles: `
    a {
      text-decoration: none;
    }
  `
})
export class SocialLinkButtonComponent {
  @Input() label = "";
  @Input() link = "";
}
