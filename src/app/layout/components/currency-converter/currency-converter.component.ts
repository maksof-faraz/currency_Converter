import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Currency, CurrencyName, CurrencyType } from '../../../interfaces/currencyInterface';
import { LoaderService } from 'src/app/services/loader.service';
import { CommonService } from 'src/app/services/common.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  historicalDate : Date | undefined ;
  currencyObjError :any = {
    base_currency : false,
    currencies : false,
    date : false,
    amount : false,
    countAmount : false
  }
  currencyObj : Currency ={
    amount : 1,
    base_currency : '',
    currencies : '',
    type : CurrencyType.Latest,
    date : ''
  }
  currencyType: boolean = false;
  currencyText : string = '';
  maxDate: Date;

  currencies : CurrencyName[]= [];

  constructor(private api : ApiService , private common : CommonService ,  private loaderService: LoaderService) {
    this.maxDate = new Date();
  }

  ngOnInit() { 
    this.getCountryName();
  }

  showSuggError(key : string) {

    if(key=='date') {
      if (!this.historicalDate && this.currencyType) this.currencyObjError[key] = true;
      else this.currencyObjError[key] = false;
    } else if(key=='amount'){
      this.currencyObjError['amount'] = false;
      if((this.currencyObj.amount && this.currencyObj.amount < 1) ) this.currencyObjError['countAmount'] = true;
      else this.currencyObjError['countAmount'] = false;
    } else {
      if (!this.common.check((this.currencyObj as any)[key])) this.currencyObjError[key] = true;
      else this.currencyObjError[key] = false;
    }
  }
  getCountryName(){
    this.currencies = [];
    this.loaderService.show();
    this.api.getCountryName().subscribe(res => {
      if(res.status=="OK") {
        this.loaderService.hide();
        let objData = res.data.data;
        for(var key in objData)  {
          this.currencies.push({value : key , viewValue : objData[key].name})
        } 
      }
      
    }, (err) => {
       this.loaderService.hide();
       alert(err.error.error)
    });
  }
  
  getExchangeRate() {
    var check = this.common.check;
    this.currencyObj.type = (this.currencyType) ? CurrencyType.Historical  : CurrencyType.Latest; 
    this.currencyObj.date = (this.currencyType && this.historicalDate) ? this.common.filterDateFormat(this.historicalDate) : ''
    if(check(this.currencyObj.amount) && this.currencyObj.amount > 0 && check(this.currencyObj.base_currency) && check(this.currencyObj.currencies) && (!this.currencyType || (this.currencyType && this.historicalDate))) {
      this.loaderService.show();
      this.api.getCurrencyConverter(this.currencyObj).subscribe(res => {
        if(res.status=="OK") {
          let objData = res.data.data;
          let itemsArray = [];
          this.loaderService.hide();
          const storedItems = localStorage.getItem('myItems');
          if (storedItems) {
            itemsArray = JSON.parse(storedItems);
          }
          if(!this.currencyType){
            this.currencyText = `${this.currencyObj.amount} ${this.currencyObj.base_currency} = ${(res.data.data[this.currencyObj.currencies] * this.currencyObj.amount).toFixed(3)} ${this.currencyObj.currencies}`
            itemsArray.push({fromCurrency : `${this.currencyObj.amount} ${this.currencyObj.base_currency}` , toCurrency : `${(res.data.data[this.currencyObj.currencies] * this.currencyObj.amount).toFixed(3)} ${this.currencyObj.currencies}` , time : new Date().toLocaleString() , historicalDate : 'Latest' })
          }  else {
            this.currencyText = `${this.currencyObj.amount} ${this.currencyObj.base_currency} = ${(res.data.data[Object.keys(objData)[0]][this.currencyObj.currencies] * this.currencyObj.amount).toFixed(3)} ${this.currencyObj.currencies}`
            itemsArray.push({fromCurrency : `${this.currencyObj.amount} ${this.currencyObj.base_currency}` , toCurrency : `${(res.data.data[Object.keys(objData)[0]][this.currencyObj.currencies] * this.currencyObj.amount).toFixed(3)} ${this.currencyObj.currencies}` , time : new Date().toLocaleString() ,  historicalDate : Object.keys(objData)[0]})
          }
          localStorage.setItem('myItems',JSON.stringify(itemsArray))
        }
        
      }, (err) => {
         this.loaderService.hide();
         alert(err.error.error);
         
      });

    } else {

      if(this.currencyObj.amount && this.currencyObj.amount < 1) this.currencyObjError['countAmount'] = true;
      else this.currencyObjError['countAmount'] = false;
     
      Object.keys(this.currencyObj).forEach(key => {
        if(key!= 'type'){
          if(key=='date') {
            if (!this.historicalDate && this.currencyType) this.currencyObjError[key] = true;
            else this.currencyObjError[key] = false;
          } else {
            if (!check((this.currencyObj as any)[key])) this.currencyObjError[key] = true;
            else this.currencyObjError[key] = false;
          }
        } 
      })
    }
  
  }

}
