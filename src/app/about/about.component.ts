import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { NavigationBar } from "../navigation-bar/navigation-bar.component";

@Component({
  selector: 'about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule, NavigationBar],
})
export class About {
  isPhone = true;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe(result => {
      const breakpoints = result.breakpoints;

      if (breakpoints[Breakpoints.HandsetPortrait])
        this.isPhone = true;
      else if (breakpoints[Breakpoints.TabletPortrait])
        this.isPhone = false;
      else
        this.isPhone = false;
    });
  }
}
