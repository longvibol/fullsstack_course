import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url ="http://localhost:8080/";
  constructor(private http: HttpClient) { }

  saveBrand(brand : any){
    return this.http.post(this.url + "brands",brand);
  }

  getBrandList(brandParam : HttpParams) : Observable<any>{
    return this.http.get<any[]>(this.url + "brands", {params: brandParam});
  }

  getAllBrandList(){
    return this.http.get(this.url + "brands");
  }

  getById(id: number){
    return this.http.get<any>(this.url + "brands/" + id);
  }

  updateBrand(brand: any){
    return this.http.put(this.url + "brands/" + brand.id,brand);
  }

}
