import { Component } from "@angular/core";

import { NavigationBar } from "../navigation-bar/navigation-bar.component";

@Component({
  selector: 'faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  imports: [NavigationBar],
})
export class Faq {}
