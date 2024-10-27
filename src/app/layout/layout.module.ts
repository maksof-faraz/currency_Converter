import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SideNavComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  exports :[LoaderComponent]
})
export class LayoutModule { }
