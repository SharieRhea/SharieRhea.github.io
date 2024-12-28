import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'social-button',
  standalone: true,
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.css'],
  imports: [CommonModule, ButtonModule],
})
export class SocialButton {
  @Input() label = "";
  @Input() link = "";
}
