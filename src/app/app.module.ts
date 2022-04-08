import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { ProductContentComponent } from './product-content/product-content.component';
import { ProductFooterComponent } from './product-footer/product-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductAboutComponent } from './product-about/product-about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductHeaderComponent,
    ProductContentComponent,
    ProductFooterComponent,
    ProductAboutComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
