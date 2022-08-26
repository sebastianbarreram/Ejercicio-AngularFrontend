import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PathRest } from '../static/hostBackend';
import { Product } from 'src/assets/models/product';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private httpClient: HttpClient) { }

   /** GET products. Will 404 if id not found */
   getProducts(): Observable<Product[]> {
    const url = PathRest.getApiProducts;
    return this.httpClient.get<Product[]>(url).pipe(
      tap(_ => console.log(`fetched products`)),
      catchError(this.handleError<Product[]>(`error while fetch products`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
