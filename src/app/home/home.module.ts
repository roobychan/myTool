import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { NaviComponent } from './navi/navi.component';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [HomeComponent, NaviComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, NavbarModule, WavesModule, ButtonsModule]
})
export class HomeModule {}
