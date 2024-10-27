import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'currency_Converter';

  ngOnInit() { 
    if(!localStorage.getItem('myItems')) localStorage.setItem('myItems', JSON.stringify([]))

  }
}
