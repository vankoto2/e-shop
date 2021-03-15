import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component'
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'product/:id', component: ViewProductComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
