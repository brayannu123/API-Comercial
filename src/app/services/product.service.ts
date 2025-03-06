import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getproduct(params:any){
    return this.http.get(environment.baseURL + environment.products , {params} )
  }

  getProductoById(id: string) {
    return this.http.get(environment.baseURL + environment.products + id);
  }
  getProductByCategory(category: string){
    return this.http.get(environment.baseURL + environment.categorie + category);
  }
}