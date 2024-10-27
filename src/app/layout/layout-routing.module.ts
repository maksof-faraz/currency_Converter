import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [{
  path : '',
  component : MainComponent,
  children : [
    {
      path : 'currency',
      loadChildren : ()=> import ('./components/currency.module').then(m=>m.CurrencyModule)
    },
    {
      path : '**',
      redirectTo : 'currency'
    }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
