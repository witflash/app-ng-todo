import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LogoModule } from './logo/logo.module';

import { AppComponent } from './app.component';
import { TodoDataService } from './todo-data.service';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { LogoComponent } from './logo/logo.component';
import { PriorityDirective } from './priority.directive';
import { ApiService } from './api.service';
import { AppRoutingModule } from "./app-routing.module";
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SessionService } from './session.service';
import { AuthService } from './auth.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    LogoComponent,
    PriorityDirective,
    TodosComponent,
    PageNotFoundComponent,
    SignInComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpModule, ReactiveFormsModule],
  providers: [TodoDataService, ApiService, SessionService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
