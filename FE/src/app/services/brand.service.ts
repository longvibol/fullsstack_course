import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class brandService {
  
  url = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  saveBrand(brand : any){
    /*
    // we take token from brower 
    let token = localStorage.getItem('token')!;

    // we crate storage to sent to BE 
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : token
    });
    const requestOptions = {headers : headers};
    return this.http.post(this.url + "brands", brand, requestOptions);
    */   
    return this.http.post(this.url + "brands", brand);
  }

  getBrandList(brandParam: HttpParams): Observable<any>{
    return this.http.get<any[]>(this.url +"brands", {params:brandParam});
  } 

}
