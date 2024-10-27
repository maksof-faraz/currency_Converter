import { Component, OnInit } from '@angular/core';
import { CurrencyList } from 'src/app/interfaces/currencyInterface';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  itemsList : CurrencyList[] = [];
  ngOnInit(): void {
    const storedItems = localStorage.getItem('myItems');
    if (storedItems) {
      this.itemsList = JSON.parse(storedItems);
      
    }
  }

  deleteRow(i : number){
    this.itemsList.splice(i , 1);
    localStorage.setItem('myItems', JSON.stringify(this.itemsList) )
  }

}
