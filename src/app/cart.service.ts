import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./models/Product";
import { ShippingType } from "./models/ShippingType";

@Injectable({ providedIn: "root" })
export class CartService {
  private items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<ShippingType[]> {
    return this.http.get<ShippingType[]>("/assets/shipping.json");
  }
}
