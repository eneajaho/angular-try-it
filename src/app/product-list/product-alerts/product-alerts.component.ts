import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Product } from "../../models/Product";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent {
  @Input() product: Product;

  @Output() notify = new EventEmitter<string>();
}
