import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentss/navbar/navbar.component';
import { ProductsComponent } from './componentss/products/products.component';
import { SidebarComponent } from './componentss/sidebar/sidebar.component';
import { FooterComponent } from './componentss/footer/footer.component';
import { ProductCardDirective } from './Directives/product-card.directive';
import { CreditPipe } from './Pipes/credit.pipe';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './componentss/aboutus/aboutus.component';
import { HomeComponent } from './componentss/home/home.component';
import { ContactusComponent } from './componentss/contactus/contactus.component';
import { NotFoundpageComponent } from './componentss/not-foundpage/not-foundpage.component';
import { GroupOfRoutesComponent } from './componentss/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './componentss/product-details/product-details.component';
import { ParentProductsComponent } from './componentss/parent-products/parent-products.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './componentss/posts/posts.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    SidebarComponent,
    FooterComponent,
    ProductCardDirective,
    CreditPipe,
    AboutusComponent,
    HomeComponent,
    ContactusComponent,
    NotFoundpageComponent,
    GroupOfRoutesComponent,
    ProductDetailsComponent,
    ParentProductsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
