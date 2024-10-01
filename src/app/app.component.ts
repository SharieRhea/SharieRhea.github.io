import { Component } from '@angular/core';
import { SocialLinkButton } from './outlined-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SocialLinkButton],
  template: `
    <div id="social-links">
      <social-link-button label="GitHub" link="https://github.com/SharieRhea"/>
      <social-link-button label="LinkedIn" link="https://www.linkedin.com/in/sharierhea"/>
    </div>
  `,
  styles: `
    #social-links {
      display: flex;
      gap: 0.5rem;
    }
  `
})
export class AppComponent {
  title = 'sharierhea.dev';
}
