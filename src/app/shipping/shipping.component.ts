import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShippingComponent {

  shippingPrices$ = this.cartService.shippingPrices$;

  constructor(private cartService: CartService) {}
  
}
