import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';
import { TodoDataService } from "../todo-data.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogoComponent],
  providers: [TodoDataService],
})
export class LogoModule { }
