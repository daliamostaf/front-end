import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentss/home/home.component';
import { ProductsComponent } from './componentss/products/products.component';
import { AboutusComponent } from './componentss/aboutus/aboutus.component';
import { ContactusComponent } from './componentss/contactus/contactus.component';
import { NotFoundpageComponent } from './componentss/not-foundpage/not-foundpage.component';
import { GroupOfRoutesComponent } from './componentss/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './componentss/product-details/product-details.component';
import { ParentProductsComponent } from './componentss/parent-products/parent-products.component';
import { PostsComponent } from './componentss/posts/posts.component';

const routes: Routes = [
  // //default
  // { path:'',component:HomeComponent},
  // { path:'home',component:HomeComponent,title:"Home Page"},
  // { path:'products',component:ProductsComponent,title:"Product Page"},
  // { path:'aboutus',component: AboutusComponent,title:"About us Page"},
  // { path:'contactus',component: ContactusComponent,title:"Contact us Page"},
  // { path:'**' , component:NotFoundpageComponent,title:" Not found page " }
{ path:'',component:GroupOfRoutesComponent,children:[
   { path:'',component:HomeComponent},
  { path:'home',component:HomeComponent,title:"Home Page"},
  { path:'products',component:ProductsComponent,title:"Product Page"},
  { path:'aboutus',component: AboutusComponent,title:"About us Page"},
  { path:'contactus',component: ContactusComponent,title:"Contact us Page"},
  { path:'prodectdetails/:prodTD',component: ProductDetailsComponent,title:" product detaiuls" },
  { path:'parentproducts',component: ParentProductsComponent,title:" product page"},
  {path:'Posts',component:PostsComponent, title:"Posts page"}
]},

{ path:'**' , component:NotFoundpageComponent,title:" Not found page " }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
