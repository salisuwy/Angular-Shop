import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import reducer from './store/reducer';
import { RouterModule } from '@angular/router';
import routes from './routes';

import {ItemService} from './item.service';
import {ItemActionsService} from './store/item-actions.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducer)
  ],
  providers: [ItemService, ItemActionsService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private itemActions: ItemActionsService) {
    itemActions.findById(78);//.fetchAll();
  }

}
