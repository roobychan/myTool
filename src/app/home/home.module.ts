import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { NaviComponent } from './navi/navi.component';

@NgModule({
  declarations: [HomeComponent, NaviComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
