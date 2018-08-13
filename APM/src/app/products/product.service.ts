import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { tap,catchError } from 'rxjs/operators'
import { stringify } from "@angular/core/src/util";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    private productUrl = 'api/products/product.json'
    
    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap( data => console.log('All: ' + stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';

        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred ${ err.error.message}`;
        } else {
            errorMessage = `server returned code ${ err.status }, error is ${ err.message }`;
        }

        console.error(errorMessage);
        return throwError(errorMessage);
    }
}