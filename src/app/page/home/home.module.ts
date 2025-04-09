import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { ModalContentComponent } from './page2/modal-content/modal-content.component';
import { ChildComponent } from './page1/child/child.component';
import { CopComponent } from './page3/cop/cop.component';
import { ComponentsModule } from '../../components/components.module';
import { PopiModule } from '../../popi/popi.module';
import { GetCNnumberPipe } from '../../utils/get-cnnumber.pipe';
import { AgTestComponent } from './ag-test/ag-test.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    ComponentsModule,
    PopiModule,
    AgGridModule
  ],
  declarations: [
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    ModalContentComponent,
    ChildComponent,
    CopComponent,
    GetCNnumberPipe,
    AgTestComponent,
  ],
})
export class HomeModule {}
