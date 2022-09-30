import { Component, OnInit } from '@angular/core'; 
import { Tab1Page } from '../tab1/tab1.page';  
import { Router } from '@angular/router';  
import { Login2Page } from '../login2/login2.page';
import { CommunFunctionService } from '../CommunFunctions/commun-functions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( public rooter : CommunFunctionService,) { }

  ngOnInit() {
  }  
  




  showCreatePage(){ 
    this.rooter.redirectTo("");
  }   

  showCreatePager(){ 
    this.rooter.redirectTo('login2');
  }  


   
}


