import { Component, inject } from '@angular/core';
import { ProductSignalsService } from 'src/app/services/product-signals.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent {

  // TODO: signals service comment out productService and uncomment the next line
  private readonly productsSignals = inject(ProductSignalsService)

  // We are using declarative style programming to set this property equal to the selectedProduct observable
  selectedProduct = this.productsSignals.selectedProduct;
}
