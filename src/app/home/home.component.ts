import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from 'primeng/button';

import { ProjectService } from "../project/project.service";
import { NavigationBar } from "../navigation-bar/navigation-bar.component";
import { ProjectCard } from "../project/project-card/project-card.component";
import { ProjectShowcaseCard } from "../project/project-showcase-card/project-showcase-card.component";
import { SocialButton } from "../social/social-button/social-button.component";
import { SocialIconButton } from "../social/social-icon-button/social-icon-link-button.component";

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    ButtonModule,
    NavigationBar,
    ProjectCard,
    ProjectShowcaseCard,
    SocialButton,
    SocialIconButton
  ],
})
export class Home implements OnInit {
  // used to showcase the most recent project and generate cards for the rest
  projectKeys!: string[];
  // the text that is actually displayed
  name = "SHARIE RHEA";

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectKeys = Object.keys(this.projectService.getProjects());

    // start the decrypt effect on every page load/initialization
    this.decrypt();
  }

  // displays randomized characters every 40ms and "decrypts" one character at a time until the
  // entire string is "decrypted"
  decrypt() {
    let iterations = 0;
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let goal = "SHARIE RHEA";

    var interval = setInterval(() => {
      // split into characters and map each one
      this.name = goal.split("").map((letter, index) => {
        // use the correct character if we've cycled enough times or it's a space
        if(index < iterations || letter === " ") {
            return goal[index];
        }
        // otherwise return a random character
        return letters[Math.floor(Math.random() * 26)];
      }).join(""); // collect back into a string

      // effect is over if we've hit the end of the string, clear the interval for performance
      if(iterations >= goal.length) {
        clearInterval(interval);
      }

      // randomize 4 times before "decrypting" the next character
      iterations += 1/4;
    // run an iteration every 40ms
    }, 40);
  }
}
