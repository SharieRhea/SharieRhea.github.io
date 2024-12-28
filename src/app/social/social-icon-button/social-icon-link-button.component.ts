import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'social-icon-button',
  standalone: true,
  templateUrl: './social-icon-button.component.html',
  styleUrls: ['./social-icon-button.component.css'],
  imports: [CommonModule, ButtonModule]
})
export class SocialIconButton {
  @Input() icon = "";
  @Input() link = "";
}
