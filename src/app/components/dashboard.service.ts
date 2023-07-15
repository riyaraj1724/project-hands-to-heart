import { Injectable } from "@angular/core";
import { Product } from "./product.model";


@Injectable()
export class DashboardServices{

    products =[
        {pId : 101, type : 1, pName :"Home Decor" ,pPrize : 799, pDescription : "Buy this product for decore yours home",pImage :"../../../assets/Images/product2.jpeg", quantityPrize : 1 , isCart : false},
        {pId : 102, type : 1, pName : "Home Decoration",pPrize : 599, pDescription : "This is beautiful for Your's Home",pImage : "../../../assets/Images/product4.jpeg",quantityPrize : 1, isCart : false},
        {pId : 103, type : 1, pName : "Hand Made Swan",pPrize : 499, pDescription : "The highest buyed product",pImage : "../../../assets/Images/product1.jpeg",quantityPrize : 1, isCart : false},
        {pId : 104, type : 1, pName : "Glass Flowers Container",pPrize : 600, pDescription : "The highest buyed product",pImage : "../../../assets/Images/product11.jpeg",quantityPrize : 1, isCart : false}
    ]  

    ourProduct = [

        // for Men

        {pId : 1, type : 2, pName :"Cotton Shirt" ,pPrize : 1799, pDescription : "Cotton Shirt",pImage :"../../../assets/Images/mp1.webp", quantityPrize : 1, isCart : false },
        {pId : 2, type : 2, pName :"Fine, Soft Himachal Wool Stole With Woven Border" ,pPrize : 1999, pDescription : "Fine, Soft Himachal Wool Stole With Woven Border",pImage :"../../../assets/Images/mp2.webp", quantityPrize : 1, isCart : false },
        {pId : 3, type : 2, pName :"Fine, Soft Himachal Wool Stole With Woven Border" ,pPrize : 1299, pDescription : "Fine, Soft Himachal Wool Stole With Woven Border",pImage :"../../../assets/Images/mp3.webp", quantityPrize : 1, isCart : false },
        {pId : 4, type : 2, pName :"Fine, Soft Himachal Wool Stole With Woven Border" ,pPrize : 1249, pDescription : "Fine, Soft Himachal Wool Stole With Woven Border",pImage :"../../../assets/Images/mp4.webp", quantityPrize : 1, isCart : false },
        {pId : 5, type : 2, pName :"Fine, Soft Himachal Wool Stole With Woven Border" ,pPrize : 2199, pDescription : "Fine, Soft Himachal Wool Stole With Woven Border",pImage :"../../../assets/Images/mp5.webp", quantityPrize : 1, isCart : false },
        {pId : 6, type : 2, pName :"Fine, Soft Himachal Wool Stole With Woven Border" ,pPrize : 4499, pDescription : "Fine, Soft Himachal Wool Stole With Woven Border",pImage :"../../../assets/Images/mp6.webp", quantityPrize : 1, isCart : false },
        {pId : 7, type : 2, pName :"Fine, Soft Himachal Wool Stole With Woven Border" ,pPrize : 1499, pDescription : "Fine, Soft Himachal Wool Stole With Woven Border",pImage :"../../../assets/Images/mp7.webp", quantityPrize : 1, isCart : false },
        {pId : 8, type : 2, pName :"Fine, Soft Himachal Wool Stole With Woven Border" ,pPrize : 999, pDescription : "Fine, Soft Himachal Wool Stole With Woven Border",pImage :"../../../assets/Images/mp8.webp", quantityPrize : 1, isCart : false },
        {pId : 9, type : 2, pName :"Handknitted Angora Wool Unisex Caps" ,pPrize : 1699, pDescription : "Handknitted Angora Wool Unisex Caps",pImage :"../../../assets/Images/mp9.jpg", quantityPrize : 1, isCart : false },
        {pId : 10, type : 2, pName :"Handknitted Angora Wool Unisex Caps" ,pPrize : 699, pDescription : "Handknitted Angora Wool Unisex Caps",pImage :"../../../assets/Images/mp10.jpg", quantityPrize : 1, isCart : false },
        {pId : 11, type : 2, pName :"Bagru Block Printed with running stitch kurta - Peacocks" ,pPrize : 2399, pDescription : "Bagru Block Printed with running stitch kurta - Peacocks",pImage :"../../../assets/Images/mp11.webp", quantityPrize : 1, isCart : false },
        {pId : 12, type : 2, pName :"Kashida Pattu Handwoven Kurta - Wine & Black" ,pPrize : 3399, pDescription : "Kashida Pattu Handwoven Kurta - Wine & Black",pImage :"../../../assets/Images/mp12.webp", quantityPrize : 1, isCart : false },
        {pId : 13, type : 2, pName :"Kashida Pattu Handwoven Kurta - Dusky Pink" ,pPrize : 2499, pDescription : "Kashida Pattu Handwoven Kurta - Dusky Pink",pImage :"../../../assets/Images/mp13.webp", quantityPrize : 1, isCart : false },
        {pId : 14, type : 2, pName :"Kashida Pattu Handwoven Kurta - Teal & Green" ,pPrize : 2499, pDescription : "Kashida Pattu Handwoven Kurta - Teal & Green",pImage :"../../../assets/Images/mp14.webp", quantityPrize : 1, isCart : false },
        {pId : 15, type : 2, pName :"Handwoven, Organic Kala Cotton Shirt - Wine" ,pPrize : 3499, pDescription : "Fine, Soft Himachal Wool Stole With Woven Border",pImage :"../../../assets/Images/mp15.webp", quantityPrize : 1, isCart : false },
        {pId : 16, type : 2, pName :"Handwoven, Organic Kala Cotton Shirt - Grey" ,pPrize : 2369, pDescription : "Fine, Soft Himachal Wool Stole With Woven Border",pImage :"../../../assets/Images/mp16.webp", quantityPrize : 1, isCart : false },
       
    //    For Womens
        {pId : 21, type : 3, pName : "Fine, Soft Himachal Wool Stole With Woven Border",pPrize : 2999, pDescription : "Fine, Soft Himachal Wool Stole With Woven Border",pImage : "../../../assets/Images/wop1.webp",quantityPrize : 1, isCart : false},
        {pId : 22, type : 3, pName : "Fine, Soft Himachal Wool Stole With Woven Border",pPrize :2589, pDescription : "Fine, Soft Himachal Wool Stole With Woven Border",pImage : "../../../assets/Images/wop2.webp",quantityPrize : 1, isCart : false},
        {pId : 23, type : 3, pName : "Exclusive Kashmiri Art Papier Mache Clutch Bag - Floral Statement",pPrize : 2899, pDescription : "Exclusive Kashmiri Art Papier Mache Clutch Bag - Floral Statement",pImage : "../../../assets/Images/wop3.webp",quantityPrize : 1, isCart : false},
        {pId : 24, type : 3, pName : "Exclusive Kashmiri Art Papier Mache Clutch Bag - Leafy Statement",pPrize : 1999, pDescription : "Exclusive Kashmiri Art Papier Mache Clutch Bag - Leafy Statement",pImage : "../../../assets/Images/wop4.webp",quantityPrize : 1, isCart : false},
        {pId : 25, type : 3, pName : "Fine, Soft Himachal Wool Stole With Woven Border",pPrize : 1499, pDescription : "Fine, Soft Himachal Wool Stole With Woven Border",pImage : "../../../assets/Images/wop5.webp",quantityPrize : 1, isCart : false},
        {pId : 26, type : 3, pName : "Fine, Soft Himachal Wool Muffler With Woven Border",pPrize : 1199, pDescription : "Fine, Soft Himachal Wool Muffler With Woven Border",pImage : "../../../assets/Images/wop6.webp",quantityPrize : 1, isCart : false},
        {pId : 27, type : 3, pName : "Fine, Soft Himachal Wool Stole With Woven Border",pPrize : 1299, pDescription : "Fine, Soft Himachal Wool Stole With Woven Border",pImage : "../../../assets/Images/wop7.webp",quantityPrize : 1, isCart : false},
        {pId : 28, type : 3, pName : "Fine, Soft Himachal Wool Stole With Woven Border",pPrize : 4899, pDescription : "Fine, Soft Himachal Wool Stole With Woven Border",pImage : "../../../assets/Images/wop8.webp",quantityPrize : 1, isCart : false},
        {pId : 29, type : 3, pName : "Fine, Soft Himachal Wool Muffler With Woven Border",pPrize : 4599, pDescription : "Fine, Soft Himachal Wool Muffler With Woven Border",pImage : "../../../assets/Images/wop9.webp",quantityPrize : 1, isCart : false},
        {pId : 30, type : 3, pName : "Fine, Soft Himachal Wool Muffler With Woven Border",pPrize : 5999, pDescription : "Fine, Soft Himachal Wool Muffler With Woven Border",pImage : "../../../assets/Images/wop10.webp",quantityPrize : 1, isCart : false},
        {pId : 31, type : 3, pName : "Fine, Soft Himachal Wool Muffler With Woven Border",pPrize : 2899, pDescription : "Fine, Soft Himachal Wool Muffler With Woven Border",pImage : "../../../assets/Images/wop11.webp",quantityPrize : 1, isCart : false},
        {pId : 32, type : 3, pName : "Fine, Soft Himachal Wool Muffler With Woven Border",pPrize : 1239, pDescription : "Fine, Soft Himachal Wool Muffler With Woven Border",pImage : "../../../assets/Images/wop12.webp",quantityPrize : 1, isCart : false},
        {pId : 33, type : 3, pName : "Fine, Soft Himachal Wool Muffler With Woven Border",pPrize : 1599, pDescription : "Fine, Soft Himachal Wool Muffler With Woven Border",pImage : "../../../assets/Images/wop13.webp",quantityPrize : 1, isCart : false},
        {pId : 34, type : 3, pName : "Fine, Soft Himachal Wool Muffler With Woven Border",pPrize : 1799, pDescription : "Fine, Soft Himachal Wool Muffler With Woven Border",pImage : "../../../assets/Images/wop14.webp",quantityPrize : 1, isCart : false},
        {pId : 35, type : 3, pName : "Fine, Soft Himachal Wool Plain Stole",pPrize : 4599, pDescription : "Fine, Soft Himachal Wool Plain Stole",pImage : "../../../assets/Images/wop15.webp",quantityPrize : 1, isCart : false},
        {pId : 36, type : 3, pName : "Fine, Soft Himachal Wool Plain Stole",pPrize : 2999, pDescription : "Fine, Soft Himachal Wool Plain Stole",pImage : "../../../assets/Images/wop16.webp",quantityPrize : 1, isCart : false},
       
        // WOMEN'S ACCESSORIES

        {pId : 45, type : 4, pName : "Handcrafted Leather Ladies Wallet - Tan",pPrize : 899, pDescription : "Handcrafted Leather Ladies Wallet - Tan",pImage : "../../../assets/Images/woa1.webp",quantityPrize : 1, isCart : false},
        {pId : 46, type : 4, pName : "Handcrafted Leather Ladies Wallet - Orange",pPrize : 499, pDescription : "Handcrafted Leather Ladies Wallet - Orange",pImage : "../../../assets/Images/woa2.webp",quantityPrize : 1, isCart : false},
        {pId : 47, type : 4, pName : "The Handcrafted Mughal Era Ornate Wooden Comb (Large)",pPrize : 399, pDescription : "The Handcrafted Mughal Era Ornate Wooden Comb (Large)",pImage : "../../../assets/Images/woa3.webp",quantityPrize : 1, isCart : false},
        {pId : 48, type : 4, pName : "Tri layered Khun Sling Bag - Red & Green",pPrize : 1799, pDescription : "Tri layered Khun Sling Bag - Red & Green",pImage : "../../../assets/Images/woa4.webp",quantityPrize : 1, isCart : false},
        {pId : 49, type : 4, pName : "Bidri Craft Pendant - Round Floral",pPrize : 1299, pDescription : "Bidri Craft Pendant - Round Floral",pImage : "../../../assets/Images/woa12.webp",quantityPrize : 1, isCart : false},
        {pId : 50, type : 4, pName : "Dhokra Metal Craft Bracelet",pPrize : 399, pDescription : "Dhokra Metal Craft Bracelet",pImage : "../../../assets/Images/woa5.webp",quantityPrize : 1, isCart : false},
        {pId : 51, type : 4, pName : "Lambani Tribal Neckpiece - Beads",pPrize : 1379, pDescription : "Lambani Tribal Neckpiece - Beads",pImage : "../../../assets/Images/woa6.webp",quantityPrize : 1, isCart : false},
        {pId : 52, type : 4, pName : "Lambani Tribal Neckpiece - Black Topli",pPrize : 1499, pDescription : "Lambani Tribal Neckpiece - Black Topli",pImage : "../../../assets/Images/woa7.webp",quantityPrize : 1, isCart : false},
        {pId : 53, type : 4, pName : "Lambani Tribal Neckpiece - Long Tomba (Black)",pPrize : 1999, pDescription : "Lambani Tribal Neckpiece - Long Tomba (Black)",pImage : "../../../assets/Images/woa8.webp",quantityPrize : 1, isCart : false},
        {pId : 54, type : 4, pName : "Lambani Tribal Neckpiece - Trikon Pendant",pPrize : 1099, pDescription : "Lambani Tribal Neckpiece - Trikon Pendant",pImage : "../../../assets/Images/woa9.webp",quantityPrize : 1, isCart : false},
        {pId : 55, type : 4, pName : "Bidri Craft Pendant - Round Fish",pPrize : 3799, pDescription : "Bidri Craft Pendant - Round Fish",pImage : "../../../assets/Images/woa10.webp",quantityPrize : 1, isCart : false},
        {pId : 56, type : 4, pName : "Bidri Craft Floral Hand Mirror",pPrize : 889, pDescription : "Bidri Craft Floral Hand Mirror",pImage : "../../../assets/Images/woa11.webp",quantityPrize : 1, isCart : false},



// For Home decore 
        {pId : 65, type : 5, pName : "Home Decor",pPrize : 799, pDescription : "Home Decor",pImage : "../../../assets/Images/product2.jpeg",quantityPrize : 1, isCart : false},
        {pId : 66, type : 5, pName : "Home Decoration",pPrize : 599, pDescription : "Home Decoration",pImage : "../../../assets/Images/product4.jpeg",quantityPrize : 1, isCart : false},
        {pId : 67, type : 5, pName : "Hand Made Swan",pPrize : 499, pDescription : "Hand Made Swan",pImage : "../../../assets/Images/product1.jpeg",quantityPrize : 1, isCart : false},
        {pId : 68, type : 5, pName : "Glass Flowers Container",pPrize : 499, pDescription : "Glass Flowers Container",pImage : "../../../assets/Images/product11.jpeg",quantityPrize : 1, isCart : false},
        {pId : 69, type : 5, pName : "Swan Statue",pPrize : 899, pDescription : "Swan Statue",pImage : "../../../assets/Images/product6.jpeg",quantityPrize : 1, isCart : false},
        {pId : 70, type : 5, pName : "Camel Statue",pPrize : 1199, pDescription : "Camel Statue",pImage : "../../../assets/Images/product16.jpeg",quantityPrize : 1, isCart : false},
        {pId : 71, type : 5, pName : "Hand Made Owl",pPrize : 1569, pDescription : "Hand Made Owl",pImage : "../../../assets/Images/product10.jpeg",quantityPrize : 1, isCart : false},
        {pId : 72, type : 5, pName : "Handmade Walls Doors",pPrize : 1799, pDescription : "Handmade Walls Doors",pImage : "../../../assets/Images/Sideproduct.jpg",quantityPrize : 1, isCart : false},
    ]

    cartItem : Product[] = [];

    constructor(){
        if(localStorage.getItem('cartItems')){
            let localString : any = localStorage.getItem('cartItems');
            console.log(localStorage.getItem('cartItems'));
            this.cartItem = JSON.parse(localString);
          }
    }

    addToCart(object : Product){
        this.cartItem.push(object);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItem));
        console.log(this.cartItem);
    }

    removeCartItem(i : number){
        if(this.cartItem[i].type == 1){
            this.products.forEach(product =>{
                if(this.cartItem[i].pId == product.pId)
                    product.isCart = false;
            })
        }
        else{
            this.ourProduct.forEach(product =>{
                if(this.cartItem[i].pId == product.pId)
                    product.isCart = false;
            })
        }
        this.cartItem.splice(i,1);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItem));
    }
}