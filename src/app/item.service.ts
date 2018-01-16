import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from './item';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

  BASE_URL = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(this.BASE_URL);
      // .map((res: any) => {
      //   console.log(res);
      //   return new Item(
      //     res.id,
      //     res.name,
      //     res.description,
      //     res.category,
      //     res.size,
      //     res.color,
      //     res.price,
      //     res.qty,
      //     res.thumbnail
      //   );
      // });
  }

  findById(id) {
    return this.http.get(`${this.BASE_URL}?id=${id}`);
  }

}
