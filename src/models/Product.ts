import { Availability } from "./Availability"; 



export class Product{ 
    title :string; 
    description :string; 
    pictures :string[]; 
    id :string;  
    price:number; 
    category:string; 
    state:string; 
    createdAt:Date; 
    availability  :Availability; 
    city:string; 
    averageStar: number;  
   
     
    

        constructor(  

        ) {  
            // this.title=title ;
            // this.description=description ; 
            // this.pictures=pictures; 
            // this.id=id; 
            // this.price=price; 
            // this.category=category; 
            // this.state=state; 
            // this.createdAt=createdAt 
            // this.availability=availability; 
            // this.city=city; 
            // this.averageStar=averageStar;
            // title:string,description :string,pictures :string[],id :string,price:number,category:string, state:string, createdAt:Date, availability  :Availability, city:string,averageStar: number 
            this.availability=new   Availability()
        }   

      
      

}  

