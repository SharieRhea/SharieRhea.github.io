import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'project-button',
  standalone: true,
  templateUrl: './project-button.component.html',
  styleUrls: ['./project-button.component.css'],
  imports: [CommonModule, ButtonModule]
})
export class ProjectButton {
  @Input() label = "";
  @Input() link = "";
  @Input() icon = "";
}
