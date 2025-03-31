import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemRoutingModule } from './system-routing.module';

import { SystemComponent } from './system.component';
import { AboutComponent } from './about/about.component';
import { MeComponent } from './me/me.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemRoutingModule,
    ComponentsModule
  ],
  declarations: [
    SystemComponent,
    AboutComponent,
    MeComponent,
  ]
})
export class SystemModule {}
