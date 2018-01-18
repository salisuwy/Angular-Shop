import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import reducer from './store/reducer';
import { RouterModule } from '@angular/router';
import routes from './routes';

import { ItemService } from './item.service';
import { ItemAction } from './store/item.action';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    NotFoundComponent,
    HeaderComponent,
    ItemComponent,
    SearchFieldComponent,
    SearchFilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducer)
  ],
  providers: [ItemService, ItemAction],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private itemAction: ItemAction) {
    //itemActions.findById(78);//.fetchAll();
    itemAction.fetchAll();
  }

}
