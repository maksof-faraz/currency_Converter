import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  urlBase = environment.urlBase;
  constructor(private http: HttpClient) { }


  getCurrencyConverter(url : string) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Replace 'your-token' with your actual token
    });

    return this.http.get<any>(`${this.urlBase}${url}`, { headers });
  }

  getCountryName(url : string) : Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Replace 'your-token' with your actual token
    });
    return this.http.get<any>(`${this.urlBase}${url}`, { headers });
  }


}
