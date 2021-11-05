import { EventEmitter, Injectable } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Product } from '../_models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {


private products:Product[]=[
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

  {id:10,
    basicData:[{id:1,name:'Camera',desc:'This is camera',lang:[{id:1,name:'English'}]}],
    category:{id:1,name:'Arts'},
    paymentTypeMethods:[{id:1,name:"visa"}],
    price:100,
    discount:50,
    imgUrl:['assets/img/layout-styles.png'],
  },

  {id:11,
    basicData:[{id:1,name:'Camera',desc:'This is camera',lang:[{id:1,name:'English'}]}],
   category:{id:1,name:'Arts'},
    paymentTypeMethods:[{id:1,name:"visa"}],
    price:100,
    discount:50,
    imgUrl:['assets/img/layout-styles.png'],
  },






]

public itemAded=new EventEmitter<Product>();

  getAllProducts(): Product[]{
  return [...this.products];
  }
  getProductById(id:number):Product | undefined{
return
  }
  addProduct(product:Product):Product[]{
this.products.push(product);
return [...this.products];
  }

  updateProduct(product:Product):Product[]{
    const index=this.products.findIndex((p) => p.id === product.id);
    this.products[index] =product;
    return [...this.products];

  }
  deleteProduct(id:number):Product[]{
    const index =this.products.findIndex((p) => p.id=== id);
    this.products.splice(index,1);
    return [...this.products];

  }
}
