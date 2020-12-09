import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "./models/Product";
import { ShippingType } from "./models/ShippingType";

@Injectable({ providedIn: "root" })
export class CartService {
  readonly count$ = new BehaviorSubject(0);

  private items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product): void {
    this.items.push(product);
    this.count$.next(this.items.length);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    this.count$.next(this.items.length);
    return this.items;
  }

  getShippingPrices(): Observable<ShippingType[]> {
    return this.http.get<ShippingType[]>("/assets/shipping.json");
  }
}
