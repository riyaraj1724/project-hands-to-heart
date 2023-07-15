import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { DashboardServices } from '../dashboard.service';
import { LoginServices } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  headersList : {name : string, id : string}[] = [];

  constructor(private router : Router, private services : DashboardServices, public loginServices : LoginServices,
              private route : ActivatedRoute){
    this.headersList = this.loginServices.headerElements;
  }

  onNavigate(str : string){
    for(let header of this.headersList){
      if(header.id === str)
        window.document.getElementById(header.id)?.setAttribute('class','active');
      else
      window.document.getElementById(header.id)?.setAttribute('class','');
    }
  }
}
