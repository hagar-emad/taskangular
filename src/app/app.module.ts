import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProuctListingComponent } from './core/products/prouct-listing/prouct-listing.component';
import { ProductsItemComponent } from './core/products/products-item/products-item.component';
import { FilterListComponent } from './core/products/filter-list/filter-list.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { ProductServiceService } from './_services/product-service.service';
import { AddProductComponent } from './core/products/add-product/add-product.component';
import { PaymentTypesComponent } from './shared/payment-types/payment-types.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProuctListingComponent,
    ProductsItemComponent,
    FilterListComponent,
    DropDownComponent,
    AddProductComponent,
    PaymentTypesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
