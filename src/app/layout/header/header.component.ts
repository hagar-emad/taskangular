import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductServiceService } from 'src/app/_services/product-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  // @Input() arrayOfProducts!: Product[];
  // productService :ProductServiceService=new ProductServiceService();
  arrayOfProducts: Product[]=[];
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.itemAded.subscribe(
      (next)=>{
        this.arrayOfProducts.push(next)
        console.log(next)
      },
      (error)=>{},
      ()=>{},
    )

  }

}
