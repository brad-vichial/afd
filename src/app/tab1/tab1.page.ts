import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, NavController } from '@ionic/angular';  
import { DetailsPage } from '../details/details.page';
import { Product } from 'src/models/Product';
import { CreateProductPage } from '../create-product/create-product.page'; 
import { Router } from '@angular/router';
import { CommunFunctionService } from '../CommunFunctions/commun-functions.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  Articles:Product[];
  constructor(public navCtrl:NavController , 
    public rooter : CommunFunctionService,
     public alertctrl :AlertController , 
     public actionctrl :ActionSheetController ,  
     
     public modalctrl :ModalController )  {  
      //on simule le fait que les articles proviennent d une base de données
          this.Articles = [  
            { 
              title:'pomme', 
              description:'pomme de france la bonne qualite a bas pris ', 
              price:45,
              category:'pommes verte', 
              createdAt: new Date(), 
              state:'bien croustillant', 
              city:'arrivages', 
              id:'1', 
              averageStar:5 , 
              availability  :{ 
                available:true, 
                type:"livraison", 
                feed:10
              }, 
              pictures:[ 
                'assets/img/product1/b1.JPG',
                'assets/img/product1/b2.JPG',
                'assets/img/product1/b3.JPG', 
                'assets/img/product1/b4.JPG',
              ]

            } 
             
            
            
          ]
     }   
     
  showCreatePage(){ 
    this.rooter.redirectTo('create-product');
  } 
  ngOnInit(): void {
    
  }
}
