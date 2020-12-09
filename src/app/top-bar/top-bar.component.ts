import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent {
  cartCount$ = this.cartService.cartCount$;

  constructor(private cartService: CartService) {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
