import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightsRoutingModule } from './insights-routing.module';
import { InsightsComponent } from './insights.component';
import { ReusableChildComponent } from './reusable-child/reusable-child.component';


@NgModule({
  declarations: [
    InsightsComponent,
    ReusableChildComponent
  ],
  imports: [
    CommonModule,
    InsightsRoutingModule
  ]
})
export class InsightsModule { }
