import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { FeaturedComponent } from "./components/featured/featured.component";
import { ItemComponent } from "./components/item/item.component";
import { BrowseComponent } from "./components/browse/browse.component";
import { CategoryComponent } from "./components/category/category.component";
import { SearchComponent } from "./components/search/search.component";


@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [
    AppComponent,
    FeaturedComponent,
    ItemComponent,
    BrowseComponent,
    CategoryComponent,
    SearchComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
