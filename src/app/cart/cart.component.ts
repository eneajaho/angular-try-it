import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  items$ = this.cartService.items$;

  checkoutForm = this.fb.group({
    name: '',
    address: ''
  });

  constructor(private cartService: CartService, private fb: FormBuilder) {}

  onSubmit(): void {
    // Process checkout data here
    this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
