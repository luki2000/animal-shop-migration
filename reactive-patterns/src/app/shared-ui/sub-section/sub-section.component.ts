import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CardComponent } from '../card/card.component';
import { ProductSignalsService } from 'src/app/services/product-signals.service';

@Component({
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe,
    CardComponent,
  ],
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styleUrls: ['./sub-section.component.css']
})
export class SubSectionComponent {
  // TODO: signals service comment out productService and uncomment the next line
  private readonly productsSignals = inject(ProductSignalsService)
  
  featured = this.productsSignals.homeProducts;
}
