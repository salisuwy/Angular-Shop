import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import { ItemAction } from '../store/item.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  store$: any;
  items: any = [];

  constructor(private store: Store<any>, private itemAction: ItemAction) {
    this.store$ = this.store.select('items');
  }

  ngOnInit() {
    this.store$.subscribe(items => this.items = items);
  }

  ngOnDestroy() {
    //this.store$.unsubscribe();
  }

}
