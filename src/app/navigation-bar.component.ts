import { Component, OnInit } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { MenuItem } from "primeng/api";

@Component({
  selector: "navigation-bar-component",
  standalone: true,
  imports: [MenubarModule, ],
  template: `
    <p-menubar [model]="items">
      <ng-template pTemplate="item" let-item let-root="root">
        <a pRipple class="flex align-items-center p-menuitem-link" [routerLink]="item.route" routerLinkActive="active" ariaCurrentWhenActive="page">
          <span id="icon" [class]="item.icon"></span>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </ng-template>
    </p-menubar>
  `,
  styles: `
    :host {
      backdrop-filter: blur(8px);
      width: 100%;
    }

    :host ::ng-deep .p-menubar {
      background-color: rgba(0, 0, 0, 0.25);
    }

    #icon {
      padding-right: .5rem;
      font-size: .75rem;
    }

    .p-menuitem-link {
      padding: .25rem .5rem;
    }
  `
})
export class NavigationBarComponent implements OnInit {
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
