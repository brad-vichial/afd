import { Component, OnInit } from '@angular/core'; 
import { Tab1Page } from '../tab1/tab1.page';  
import { Router } from '@angular/router'; 
import { CommunFunctionService } from '../CommunFunctions/commun-functions.service';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {
  [x: string]: any;

  constructor( public rooter : CommunFunctionService,) { }

  ngOnInit() {
  } 



  
  showCreatePage(){ 
    this.rooter.redirectTo('login');
  } 
}
