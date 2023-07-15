import { Component } from '@angular/core';
import { DashboardServices } from '../dashboard.service';
import { LoginServices } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'LoginComponent';
  login = true;
  register =false;
  email : string = "";
  password : string = "";
  log : {email : string, password : string, name : string}[] = [];
  constructor(private services : LoginServices,private router : Router,private route : ActivatedRoute){
    
  }
  ngOninIt(){
    this.onClickLogin();
  }

  onClickLogin(){
    window.document.getElementById("loginbtn")?.setAttribute('class','navTab active');
    window.document.getElementById("loginform")?.setAttribute('class','content active');
    window.document.getElementById("registerbtn")?.setAttribute('class','navTab');
    window.document.getElementById("registerform")?.setAttribute('class','content')
  }
  onClickRegister(){
    window.document.getElementById("loginbtn")?.setAttribute('class','navTab');
    window.document.getElementById("loginform")?.setAttribute('class','content');
    window.document.getElementById("registerbtn")?.setAttribute('class','navTab active')
    window.document.getElementById("registerform")?.setAttribute('class','content active');
  }

  loginSubmit(){
    this.services.accDetails.forEach( acc =>{
    if(acc.email === this.email && acc.password == this.password){
        this.services.accName = acc.name;
        this.router.navigate(['../home'],{relativeTo:this.route})
    }
  })
}
  onRegister(){

  }
  
}
