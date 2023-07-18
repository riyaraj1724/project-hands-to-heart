import { Injectable } from "@angular/core";


@Injectable()
export class LoginServices{

    headerElements = [
        {name :'Home', id :'home'},
        {name :'Our Products', id :'Ourproducts'},
        {name :'About Us', id :'about'},
        {name :'Become A Saller', id :'seller'},
        {name :'Contact Us', id :'contact'},
        {name :'Go to cart', id :'cart'},
        {name :'Log In/Sign Up', id :'login'}
    ]
    accDetails : { email : string, password : string, name : string }[] = [
        { email : "riya1724@gmail.com", password : "Raj1724@", name : "Riya",
        email : "manish123@gmail.com", password : "manish123@", name : "Riya"}
       
    ];

    accName : string = "";

    constructor(){
        
    }

}