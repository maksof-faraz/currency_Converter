import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';

const routes: Routes = [
  {
    path : "currency-converter",
    component : CurrencyConverterComponent
  },
  {
    path : "currency-list",
    component : CurrencyListComponent
  },
  {
    path : '**',
    redirectTo : "currency-converter"
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
