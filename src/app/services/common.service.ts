import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  filterDateFormat(date : Date | string ) {
    var newDate = new Date(date);
    return `${newDate.getFullYear()}-${(newDate.getMonth()) + 1}-${newDate.getDate()}`;
  }

  
  check(value : string | Date | number) {
    if (value != null && value != undefined && value != '') {
      return true;
    } else {
      return false;
    }
  }
}
