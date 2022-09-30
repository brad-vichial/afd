import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';  
import { PanierPage } from '../panier/panier.page';
import { CommunFunctionService } from '../CommunFunctions/commun-functions.service'; 


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'], 
  
    

})
export class DetailsPage implements OnInit { 
    
    slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    

  constructor( public rooter : CommunFunctionService,) { }

  ngOnInit() {
  }  
  
  showCreatePage(){ 
    this.rooter.redirectTo('panier');
  }    


}
  



