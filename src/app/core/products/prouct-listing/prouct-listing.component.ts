import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter } from 'src/app/_models/filtet.model';
import { Product } from 'src/app/_models/product.model';
import { ProductServiceService } from 'src/app/_services/product-service.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-prouct-listing',
  templateUrl: './prouct-listing.component.html',
  styleUrls: ['./prouct-listing.component.scss']
})



export class ProuctListingComponent implements OnInit {

@Input() productListArray!: Product[];
filterList: Filter[];
noOfPages: number[]=[];
productsArrayToBeViewed: Product[]=[];
currentPage:number=0;
@Input() pageSize !: number;
@Input() numberOfItemsPerPage:number=9;
@Output() outputItem=new EventEmitter<Product>();
productService:ProductServiceService=new ProductServiceService();

  constructor() {
    this.productListArray=[
      {id:1,
        basicData:[{id:1,name:'Camera',desc:'This is camera',lang:[{id:1,name:'English'}]}],
        category:{id:1,name:'Arts'},
        paymentTypeMethods:[{id:1,name:"visa"}],
        price:100,
        discount:50,
        imgUrl:['assets/img/layout-styles.png']
      },

      {id:2,
        basicData:[{id:1,name:'Camera',desc:'This is camera',lang:[{id:1,name:'English'}]}],
        category:{id:1,name:'Arts'},
        paymentTypeMethods:[{id:1,name:"visa"}],
        price:100,
        discount:50,
        imgUrl:['assets/img/layout-styles.png']
      },


      {id:3,
        basicData:[{id:1,name:'Camera',desc:'This is camera',lang:[{id:1,name:'English'}]}],
        category:{id:1,name:'Arts'},
        paymentTypeMethods:[{id:1,name:"visa"}],
        price:100,
        discount:50,
        imgUrl:['assets/img/layout-styles.png'],
      },

      {id:4,
        basicData:[{id:1,name:'Camera',desc:'This is camera',lang:[{id:1,name:'English'}]}],
        category:{id:1,name:'Arts'},
        paymentTypeMethods:[{id:1,name:"visa"}],
        price:100,
        discount:50,
        imgUrl:['assets/img/layout-styles.png'],
      },

      {id:5,
        basicData:[{id:1,name:'Camera',desc:'This is camera',lang:[{id:1,name:'English'}]}],
        category:{id:1,name:'Arts'},
        paymentTypeMethods:[{id:1,name:"visa"}],
        price:100,
        discount:50,
        imgUrl:['assets/img/layout-styles.png'],
      },

      {id:6,
        basicData:[{id:1,name:'Camera',desc:'This is camera',lang:[{id:1,name:'English'}]}],
        category:{id:1,name:'Arts'},
        paymentTypeMethods:[{id:1,name:"visa"}],
        price:100,
        discount:50,
        imgUrl:['assets/img/layout-styles.png'],
      },


      {id:7,
        basicData:[{id:1,name:'Camera',desc:'This is camera',lang:[{id:1,name:'English'}]}],
        category:{id:1,name:'Arts'},
        paymentTypeMethods:[{id:1,name:"visa"}],
        price:100,
        discount:50,
        imgUrl:['assets/img/layout-styles.png'],
      },


      {id:8,
        basicData:[{id:1,name:'Camera',desc:'This is camera',lang:[{id:1,name:'English'}]}],
        category:{id:1,name:'Arts'},
        paymentTypeMethods:[{id:1,name:"visa"}],
        price:100,
        discount:50,
        imgUrl:['assets/img/layout-styles.png'],
      },


      {id:9,
        basicData:[{id:1,name:'Camera',desc:'This is camera',lang:[{id:1,name:'English'}]}],
        category:{id:1,name:'Arts'},
        paymentTypeMethods:[{id:1,name:"visa"}],
        price:100,
        discount:50,
        imgUrl:['assets/img/layout-styles.png'],
      },

      // {id:10,
      //   basicData:[{id:1,name:'Camera',desc:'This is camera',lang:[{id:1,name:'English'}]}],
      //   categories:[{id:1,name:'Arts'}],
      //   paymentTypeMethods:[{id:1,name:"visa"}],
      //   price:100,
      //   discount:50,
      //   imgUrl:['assets/img/layout-styles.png'],
      // },

      // {id:11,
      //   basicData:[{id:1,name:'Camera',desc:'This is camera',lang:[{id:1,name:'English'}]}],
      //   categories:[{id:1,name:'Arts'}],
      //   paymentTypeMethods:[{id:1,name:"visa"}],
      //   price:100,
      //   discount:50,
      //   imgUrl:['assets/img/layout-styles.png'],
      // },
    ]

    this.filterList=[
      {filterName:"Arts & Crafts"},
      {filterName:"Automotive"},
      {filterName:"Baby"},
      {filterName:"Books"},
      {filterName:"Eletronics"},
      {filterName:"Women's Fashion"},
      {filterName:"Men's Fashion"},
      {filterName:"Health & Household"},
      {filterName:"Home & Kitchen"},
      {filterName:"Military Accessories"},
      {filterName:"Movies & Television"},
      {filterName:"Sports & Outdoors"},
      {filterName:"Tools & Home Improvement"},
      {filterName:"Toys & Games"}
    ]

  }

  ngOnInit(): void {
this.productListArray=this.productService.getAllProducts();
const numberOfPages = this.productListArray.length/this.numberOfItemsPerPage;
// console.log(Math.floor(numberOfPages));
// console.log('arrayLength',this.productListArray.length);
for(let index=0;index< numberOfPages; index++){
this.noOfPages.push(index + 1)
}
this.sliceArray();
}
//  this.productService.deleteItem.subscribe(
//    (next)=>{
//     this.productsArrayToBeViewed=this.productService.delete(next);
// }
// )




newItemAdded(product:Product){
  // this.outputItem.emit(product);

}

sliceArray(){
  this.productsArrayToBeViewed=this.productListArray.slice(this.currentPage * this.numberOfItemsPerPage,(this.currentPage * this.numberOfItemsPerPage)+this.numberOfItemsPerPage)
}

onPagination(i:number){
 if(i>-1 && i< this.noOfPages.length) {
this.currentPage=i;
this.sliceArray();
}
}
}
