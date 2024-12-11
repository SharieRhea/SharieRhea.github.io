import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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
  isPhone = false;

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
