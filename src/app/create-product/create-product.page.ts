import { Component,Injectable } from '@angular/core'; 
import {NavParams, NavController } from '@ionic/angular'; 
import {  Product } from 'src/models/Product';
import { Availability } from 'src/models/Availability';
import { CommunFunctionService } from '../CommunFunctions/commun-functions.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage  { 
  myProduct :Product =new Product()
  ; 
  catgories =[ 
    { 
      title : " pommes"
    }, 
    { 
      title : " clementines"
    },   
    { 
      title : " poire"
    },   
    { 
      title : " raisin"
    },   
    { 
      title : " prune"
    },  
  ] ;
  cities =[ 
    { 
      title : " bonamoussadi"
    },  
    { 
      title : " deido"
    },  
    { 
      title : " akwa nord"
    },  
    { 
      title : " village"
    },  
    { 
      title : " sable"
    },   
    { 
      title : " makepe"
    },  
    { 
      title : " akwa"
    },  
    { 
      title : " bonadjo"
    }, 
  ] ;

  constructor(  ) {  
     // this.myProduct.availability={} as Availability ; 
      //this.myProduct.pictures= [];  
    
       

      

     }

   
  ionViewDidlord(){ 
    console.log('ionViewDidlord  CreateProductPage  ');
  }
  create(myProduct){ 
    console.log('myProduct=',myProduct);
  }
}
