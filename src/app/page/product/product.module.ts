import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductRoutingModule} from './product-routing.module';

import { ProductComponent } from './product.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductRoutingModule,
    ComponentsModule
  ],
  declarations: [ProductComponent]
})
export class ProductModule {}
