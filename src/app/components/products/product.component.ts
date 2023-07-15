import { Component } from '@angular/core';
import { DashboardServices } from '../dashboard.service';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  ourProducts :any[] = [];
  mens : Product[] = [];
  woMen : Product[] = [];
  woMensAcc : Product[] = [];
  homeDecore : Product[] = [];

  constructor(private service : DashboardServices, private router : Router, private route :ActivatedRoute){
    this.ourProducts = this.service.ourProduct;
    this.ourProducts.forEach( product =>{
      if(product.type == 2)
        this.mens.push(product);
      if(product.type == 3)
        this.woMen.push(product);
      if(product.type == 4)
        this.woMensAcc.push(product);
      if(product.type == 5)
        this.homeDecore.push(product);
    })
  }

  onAddCartItem(prd : Product){
    console.log(prd.pId);
    this.ourProducts.forEach(product =>{
      if(product.pId === prd.pId){
        if(product.isCart){
          this.router.navigate(['../cart'],{relativeTo : this.route})
          return;
        }
        product.isCart = true;
        this.service.addToCart(product);
      }
    }) 
    // this.ourProducts = this.service.ourProduct;
  }
}
