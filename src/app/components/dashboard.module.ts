import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './products/product.component';
import { SellerComponent } from './seller/seller.component';
import { CartItemComponent } from './cartItems/cartItem.component';

@NgModule({
    declarations: [
      DashboardComponent,
      HomeComponent,
      HeaderComponent,
      FooterComponent,
      AboutComponent,
      ContactComponent,
      LoginComponent,
      ProductComponent,
      SellerComponent,
      CartItemComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
    ]
  })
  export class DashboardModule { }