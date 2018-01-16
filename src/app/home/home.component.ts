import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ItemActionsService} from '../store/item-actions.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  store$: any;
  items: any = [];

  constructor(private itemAction: ItemActionsService, private store: Store<any>) {
    this.store$ = this.store.select('items');
  }

  ngOnInit() {
    this.store$.subscribe(items => this.items = items);
  }

  ngOnDestroy() {
    this.store$.unsubscribe();
  }

}
