import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '@modules/blog/components/pagination/pagination.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    PaginationComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
  ]
})
export class SharedModule { }
