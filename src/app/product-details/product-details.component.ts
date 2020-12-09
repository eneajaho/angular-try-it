import { ChangeDetectionStrategy, Component } from "@angular/core";
import { products } from "../products";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart.service";
import { Product } from "../models/Product";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  product$: Observable<Product> = this.route.paramMap.pipe(
    map(params => products[+params.get("productId")])
  );

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    // window.alert("Your product has been added to the cart!");
  }
}
