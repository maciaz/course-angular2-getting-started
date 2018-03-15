import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipie } from '../shared/convert-to-speces.pipe';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  imports: [
    RouterModule.forChild([
    { path: 'products', component: ProductListComponent },
    {
      path: 'products/:id',
      canActivate: [ProductGuardService],
      component: ProductDetailComponent
    }
    ]),
    SharedModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ConvertToSpacesPipie
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
