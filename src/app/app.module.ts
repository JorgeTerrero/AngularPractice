import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
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
import {BsDropdownModule} from 'ngx-bootstrap';
import { from } from 'rxjs';
import { TestServerComponent } from './testServer/testServer.component';
import { ControlGameComponent } from './ControlGame/ControlGame.component';
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
      ShoopingEditComponent,
      TestServerComponent,
      ControlGameComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      BsDropdownModule,
      BsDropdownModule.forRoot(),
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
