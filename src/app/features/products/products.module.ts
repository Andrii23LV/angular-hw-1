import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { InputModule } from 'src/app/shared/input/input.module';
import { ButtonModule } from 'src/app/shared/button/button.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule
  ],
  exports: [ProductsComponent, ProductComponent]
})
export class ProductsModule { }
