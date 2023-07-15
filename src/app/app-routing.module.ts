import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/products/product.component';
import { SellerComponent } from './components/seller/seller.component';
import { CartItemComponent } from './components/cartItems/cartItem.component';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard/home', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent, children:[
    {path : 'home', component : HomeComponent},
    {path : 'about', component : AboutComponent},
    {path : 'contact', component : ContactComponent},
    {path : 'login', component : LoginComponent},
    {path : 'Ourproducts', component : ProductComponent},
    {path : 'seller', component : SellerComponent},
    {path : 'cart', component : CartItemComponent}
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
