import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { BooksRoutingModule } from './books-routing.module';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    BookPageComponent,
    LayoutPageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
