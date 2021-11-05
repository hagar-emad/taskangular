import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Category } from 'src/app/_models/categorry.model';
import { PaymentType } from 'src/app/_models/payment-type.model';
import { Product } from 'src/app/_models/product.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
categories!:Category[];
paymentTypeMethods!: PaymentType[];
product=<Product>{};
@ViewChild('myForm') form!: ElementRef;
// @ViewChi ld('textInput') nameInput!: ElementRef
  constructor(private categoryService : CategoryService, private paymentTypeService:PaymentTypeService)
   {
  this.product={
        id:2,
        basicData:[
          {id:1,
            name:'',
            desc:'This is camera',
            lang:[{id:1,name:'English'}],
          },
        ],
        category:{id:1,name:'Arts'},
        paymentTypeMethods:[{id:1,name:"visa"}],
        price:100,
        discount:50,
        imgUrl:['assets/img/layout-styles.png'],
      }
  }

  ngOnInit(): void {
    this.categories=this.categoryService.getAllCategories();
    this.paymentTypeMethods=this.paymentTypeService.getAllPaymentTypes();
  }
  onSubmit(form:NgForm,textInput : NgModel){
    // this.product={
    //     id:2,
    //     basicData:[
    //       {id:1,
    //         name:'Camera',
    //         desc:'This is camera',
    //         lang:[{id:1,name:'English'}],
    //       },
    //     ],
    //     category:{id:1,name:'Arts'},
    //     paymentTypeMethods:[{id:1,name:"visa"}],
    //     price:100,
    //     discount:50,
    //     imgUrl:['assets/img/layout-styles.png'],
    //   }

// this.product={...form.value}
    const cat = this.categoryService.getCategoryById(+form.value.category);



  //   this.product = {
  //   basicData:[
  //     {
  //       name:form.value.nameInputField,
  //       desc:form.value.descInputField,
  //       lang:[{id:1,name:'English'}],
  //     },
  //   ],

  //   paymentTypeMethods:[{id:1,name:"visa"}],
  //   price:100,
  //   discount:50,
  //   imgUrl:['assets/img/layout-styles.png'],
  // }
  //   ;
  // this.product={
  //   basicData:[{

  //   }]
  // }
    // this.product.basicData[0].name=form.value.nameInputField;
    // this.product.basicData[0].desc=form.value.descInputField;
    if (cat) {
      this.product.category = cat;
    }

    // console.log((this.nameInput.nativeElement as HTMLInputElement).value);
    for (let index = 0; index < this.paymentTypeMethods.length; index++) {
      if (form.value['check_' + index]) {
        this.product.paymentTypeMethods.push(this.paymentTypeMethods[index]);
      }
  }
    console.log(this.product);
  }
//   onPaymentTypeChecked(index:number, myForm:NgForm){
//     // const myForm = this.form.nativeElement as NgForm;
//     this.product.paymentTypeMethods=[]

//   // onInputChanged(name:string){
//   //   this.product.basicData[0].name= name;
//   // }

// }
}
