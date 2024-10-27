import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LayoutModule } from '../layout.module';


@NgModule({
  declarations: [
    CurrencyConverterComponent,
    CurrencyListComponent
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    LayoutModule,
    FormsModule

  ]
})
export class CurrencyModule { }
