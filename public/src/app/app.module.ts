import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { AuthorComponent } from './author/author.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ReviewComponent } from './review/review.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';

import { FormsModule } from '@angular/forms/'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BrandComponent,
    CategoryComponent,
    ProductDetailComponent,
    ReviewComponent,
    ReviewDetailComponent,
    AuthorComponent,
    AllReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
