import { Component } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { productsList } from '../models/productlist';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
products: Iproduct[]= productsList;
product:any = 0;

toggle(id:number) {
  let Selected = this.products.find((item)=>  item.id == id)   ;
  if(Selected!.quantity == 0 ){
    Selected!.quantity == 0;
  }
  else{
    Selected!.quantity -= 1 ;
  }
}
}
