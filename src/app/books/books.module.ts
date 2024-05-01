import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { BooksRoutingModule } from './books-routing.module';



@NgModule({
  declarations: [
    BookPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
