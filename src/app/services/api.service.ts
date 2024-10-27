import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Currency } from '../interfaces/currencyInterface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private app:AppService) { }


  getCurrencyConverter(body : Currency){
    var parameters ='';
		Object.keys(body).forEach((key, i)=>{ (i==0) ? parameters += `?${key}=${(body as any)[key]}` : parameters +=  `&${key}=${(body as any)[key]}`; });
		return this.app.getCurrencyConverter(`currency/currencyConverter${parameters}`);
  }

  getCountryName(){
    return this.app.getCountryName(`currency/countryName`);
  }
}
