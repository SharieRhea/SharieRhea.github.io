import { Component, OnInit } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { MenuItem } from "primeng/api";

@Component({
  selector: "navigation-bar",
  standalone: true,
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  imports: [MenubarModule],
})
export class NavigationBar implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: "Home",
        icon: "pi pi-home",
        route: ""
      },
      {
        label: "Projects",
        icon: "pi pi-star",
        route: "/projects"
      },
      {
        label: "About",
        icon: "pi pi-search",
        route: "/about"
      }
    ];
  }
}
