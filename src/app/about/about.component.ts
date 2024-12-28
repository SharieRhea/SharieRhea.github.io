import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavigationBar } from "../navigation-bar/navigation-bar.component";

@Component({
  selector: 'about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule, NavigationBar],
})
export class About {}
