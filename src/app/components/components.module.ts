import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule} from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import {PopiModule} from '../popi/popi.module';
const components = [
  NavbarComponent,
  HeaderComponent,
  MainComponent,
];

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule,
    PopiModule
  ],
  exports: [
    components,
  ],
})
export class ComponentsModule {}
