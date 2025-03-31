import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { DetailRoutingModule } from './detail-routing.module';

import { DetailComponent } from './detail.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRoutingModule,
    ComponentsModule,
  ],
  declarations: [DetailComponent]
})
export class DetailModule {}
