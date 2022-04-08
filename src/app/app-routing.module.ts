import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAboutComponent } from './product-about/product-about.component';
import { ProductContentComponent } from './product-content/product-content.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'products', component: ProductContentComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'about', component: ProductAboutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
