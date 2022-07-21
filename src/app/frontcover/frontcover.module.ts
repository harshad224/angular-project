import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontcoverRoutingModule } from './frontcover-routing.module';
import { FrontpageComponent } from './frontpage/frontpage.component';

console.log('frontcover Module works')
@NgModule({
  declarations: [
    FrontpageComponent
  ],
  imports: [
    CommonModule,
    FrontcoverRoutingModule
  ]
})
export class FrontcoverModule { }
