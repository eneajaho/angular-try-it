import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { CartService } from "../cart.service";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent {
  cartCount$: Observable<number> = this.cartService.count$;

  constructor(private cartService: CartService) {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
