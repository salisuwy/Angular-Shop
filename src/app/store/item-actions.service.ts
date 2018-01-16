import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemService } from '../item.service';
import { FETCH_ALL} from './action.types';

@Injectable()
export class ItemActionsService {

  constructor(private itemService: ItemService, private store: Store<any>) { }

  fetchAll() {
    this.itemService.findAll().subscribe(items => {
      this.store.dispatch({ type: FETCH_ALL, items });
    });
  }

  findById(id) {
    this.itemService.findById(id).subscribe(items => {
      this.store.dispatch({ type: FETCH_ALL, items });
    });
  }

}
