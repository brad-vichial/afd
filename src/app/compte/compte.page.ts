import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';  
import { LoginPage } from '../login/login.page';
import { CommunFunctionService } from '../CommunFunctions/commun-functions.service';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  constructor( public rooter : CommunFunctionService,) { }

  ngOnInit() {
  } 
  
  showCreatePager(){ 
    this.rooter.redirectTo('login');
  }  

}
