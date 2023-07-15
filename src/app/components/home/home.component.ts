import { Component } from '@angular/core';
import { DashboardServices } from '../dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServices } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'HomeComponent';
  
  displayedProduct :any[]  = [];

  constructor(private service : DashboardServices, private router :Router, private route : ActivatedRoute,
    private loginServices : LoginServices){
    this.displayedProduct = this.service.products;
  }

  onAddCartItem(i : number){
    console.log(i);
    if(this.displayedProduct[i].isCart){
      this.router.navigate(['../cart'], {relativeTo : this.route})
      return;
    }
    this.displayedProduct[i].isCart = true;
    this.service.addToCart(this.displayedProduct[i]);
    // this.displayedProduct = this.service.products;
  }
  clickShop(){
    window.document.getElementById('Ourproducts')?.setAttribute('class','active');
    let headersList = this.loginServices.headerElements;
    for(let header of headersList){
      if(header.id != 'Ourproducts')
        window.document.getElementById(header.id)?.setAttribute('class','');
    }
}
}
