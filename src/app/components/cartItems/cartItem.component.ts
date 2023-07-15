import { Component } from '@angular/core';
import { Product } from '../product.model';
import { DashboardServices } from '../dashboard.service';
import { LoginServices } from '../login.service';
@Component({
  selector: 'app-cartItem',
  templateUrl: './cartItem.component.html',
  styleUrls: ['./cartItem.component.css']
})
export class CartItemComponent {

    cartList : Product[] =[
        // {pName :"Home Decor" ,pPrize : 99, pDescription : "Buy this product for decore yours home",pImage :"../../../assets/Images/product2.jpeg",quantityPrize : 1 },
        // {pName : "Home Decoration",pPrize : 599, pDescription : "This is beautiful for Your's Home",pImage : "../../../assets/Images/product4.jpeg", quantityPrize : 1}
    ];

    total : number = 0;
    count : number = 0;
    multiply : number = 1;
  
  constructor(private service : DashboardServices, private loginServices : LoginServices,){
      this.updateCartList();
  }

  removeFromCart(i : number){
    this.service.removeCartItem(i);
    this.updateCartList();
  }

  updateCartList(){
    this.cartList = this.service.cartItem;
    this.total = 0;
    for(let cart of this.cartList)
        this.total = this.total+(cart.pPrize * cart.quantityPrize);
  }

  updateSum(){
    this.total = 0;
    for(let cart of this.cartList)
        this.total = this.total+(cart.pPrize * cart.quantityPrize);
  }

  clickShop(){
    window.document.getElementById('Ourproducts')?.setAttribute('class','active');
    let headersList = this.loginServices.headerElements;
    for(let header of headersList){
      if(header.id != 'Ourproducts')
        window.document.getElementById(header.id)?.setAttribute('class','');
    }
  }
  displayInfo(){
    alert("Payment are Successfully Paid");  
  }
}