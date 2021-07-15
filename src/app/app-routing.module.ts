import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { FeaturedComponent } from "./components/featured/featured.component";
import { ItemComponent } from "./components/item/item.component";
import { BrowseComponent } from "./components/browse/browse.component";
import { CategoryComponent } from "./components/category/category.component";
import { SearchComponent } from "./components/search/search.component";


const routes: Routes = [
  { path: "", redirectTo: "/(featured:featured//browse:browse//search:search)", pathMatch: "full" },

    { path: "featured", component: FeaturedComponent, outlet: "featured" },
    { path: "item", component: ItemComponent, outlet: "featured" },

    { path: "browse", component: BrowseComponent, outlet: "browse" },
    { path: "category", component: CategoryComponent, outlet: "browse" },
    { path: "item", component: ItemComponent, outlet: "browse" },

    { path: "search", component: SearchComponent, outlet: "search" },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
