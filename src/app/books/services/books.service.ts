import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Books } from '../interfaces/book.interface';

@Injectable({providedIn: 'root'})
export class BooksService {

    private baseUrl: string = environments.baseUrl;

    constructor(private http: HttpClient) { }

    getBooks():Observable<Books[]> {
        return this.http.get<Books[]>(`${this.baseUrl}/books`)
    }
    
}