import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './successAlert/successAlert.component';
import { ErrorAlertComponent } from './errorAlert/errorAlert.component';
import { HeadersComponent } from './components/headers/headers.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { RepiceListComponent } from './components/recipe-book/repice-list/repice-list.component';
import { RepiceItemComponent } from './components/recipe-book/repice-item/repice-item.component';
import { RepiceDetailsComponent } from './components/recipe-book/repice-details/repice-details.component';
import { ShoopingEditComponent } from './components/shopping-list/shooping-edit/shooping-edit.component';

@NgModule({
   declarations: [
      AppComponent,
      SuccessAlertComponent,
      ErrorAlertComponent,
      HeadersComponent,
      ShoppingListComponent,
      RecipeBookComponent,
      RepiceListComponent,
      RepiceItemComponent,
      RepiceDetailsComponent,
      ShoopingEditComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
