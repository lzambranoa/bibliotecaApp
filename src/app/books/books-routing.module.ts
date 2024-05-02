import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';

const routes: Routes = [
    {
        path: '',
       component: LayoutPageComponent,
       children:[
        {
            path: 'books',
            component: BookPageComponent
        },
        {
            path: '**',
            redirectTo: 'books'
        }
       ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BooksRoutingModule { }
