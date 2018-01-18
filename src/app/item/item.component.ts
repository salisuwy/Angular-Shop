import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item;
  qtyInCart = 0;
  constructor() { 

  }

  //  OnInit
  // check if item exist in cart to update count
  // if item in stock


  add(){
    // check if enough qty
    //update qty count
    //dispatch action ADD
  }

  remove(){
    // check if qty < 0
    //update qty  
    //dispatch action REMOVE
  }


}
