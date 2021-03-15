import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';

    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  viewProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+ productId;
    return this.httpClient.get<Product>(productUrl); // return an observable
  }
}
