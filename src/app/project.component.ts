import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'project-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Projects!</p>
  `,
  styles: ``
})
export class ProjectComponent {
}
