import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ItemAction } from '../store/item.action';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  searchField = new FormControl();

  constructor(private itemAction: ItemAction) { }

  ngOnInit() {
    this.searchField.valueChanges.subscribe(value => {
      console.log(`Search ${value}`);
      this.itemAction.search('text', value);
    });
  }

}
