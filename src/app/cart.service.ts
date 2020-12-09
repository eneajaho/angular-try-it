import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";
import { Product } from "./models/Product";
import { ShippingType } from "./models/ShippingType";

@Injectable({ providedIn: "root" })
export class CartService {
  private items = new BehaviorSubject<Product[]>([]);
  items$ = this.items.asObservable().pipe(distinctUntilChanged());

  cartCount$ = this.items$.pipe(map(items => items.length));

  constructor(private http: HttpClient) {}

  addToCart(product: Product): void {
    const currentItems = this.items.value;
    this.items.next([...currentItems, product]);
  }

  clearCart(): void {
    this.items.next([]);
  }

  get shippingPrices$(): Observable<ShippingType[]> {
    return this.http.get<ShippingType[]>("/assets/shipping.json");
  }
}
