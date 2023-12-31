import { Component, inject } from '@angular/core';
import { ProductSignalsService } from 'src/app/services/product-signals.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  private readonly productsSignals = inject(ProductSignalsService)

  products = this.productsSignals.products
}
