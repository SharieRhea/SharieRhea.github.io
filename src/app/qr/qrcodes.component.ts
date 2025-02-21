import { Component } from "@angular/core";

import { NavigationBar } from "../navigation-bar/navigation-bar.component";

@Component({
  selector: 'qr-codes',
  standalone: true,
  templateUrl: './qrcodes.component.html',
  styleUrls: ['./qrcodes.component.css'],
  imports: [NavigationBar],
})
export class QrCodes {}
