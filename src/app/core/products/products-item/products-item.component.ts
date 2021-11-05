import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductServiceService } from 'src/app/_services/product-service.service';


@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],

})
export class ProductsItemComponent implements OnInit {

@Input() product!: Product;
// @ViewChild('inputNumber') inputElement !:ElementRef;
// productService:ProductServiceService= new ProductServiceService();
  constructor(private productService:ProductServiceService) {
    // this.product ={
    //   name:'Camera',
    //   price:100,
    //   imgUrl:'assets/img/layout-styles.png',
    //   discount:30,
    // };
  }




  ngOnInit(): void {

  }



getPrice(){
  return this.product.discount
  ? this.product.price - this.product.discount
  : this.product.price;
}


// itemAddedToCart(htmlEl:HTMLInputElement){
//   const message= `item ${this.product.name}has been added`
//   alert(message);
//   console.log(htmlEl);
//   htmlEl.value=this.product.price.toString();

//   const inputElementCasted=this.inputElement.nativeElement as HTMLInputElement

//   console.log('input', this.inputElement.nativeElement);

// }


itemAddedToCart(){
  // const message= `item ${this.product.name}has been added`
  // alert(message);
  // console.log(htmlEl);
  // htmlEl.value=this.product.price.toString();

  // const inputElementCasted=this.inputElement.nativeElement as HTMLInputElement

  // console.log('input', this.inputElement.nativeElement);
this.productService.itemAded.emit(this.product);
}



// deleteThisProduct(){
//   this.productService.deleteProduct.emit(this.product);
// }

}
