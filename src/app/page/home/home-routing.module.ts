import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import {Page4Component} from './page4/page4.component';
import {AgTestComponent} from './ag-test/ag-test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'ag-test',
        pathMatch: 'full',
      },
      {
        path: 'ag-test',
        component: AgTestComponent,
      },
      {
        path: 'page1',
        component: Page1Component,
      },
      {
        path: 'page2',
        component: Page2Component
      },
      {
        path: 'page3',
        component: Page3Component
      },
      {
        path: 'page4',
        component: Page4Component
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
