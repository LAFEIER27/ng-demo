import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { SystemComponent } from './page/system/system.component';
import {Page1Component} from './page/home/page1/page1.component'
import {Page2Component} from './page/home/page2/page2.component'
import {Page3Component} from './page/home/page3/page3.component'
import {AboutComponent} from './page/system/about/about.component';
import {MeComponent} from './page/system/me/me.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path: '',
        redirectTo: 'page1',
        pathMatch: 'full'
      },
      {
        path: 'page1',
        component: Page1Component
      },
      {
        path: 'page2',
        component: Page2Component
      },
      {
        path: 'page3',
        component: Page3Component
      },
    ]
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'system',
    component:SystemComponent,
    children:[
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'me',
        component: MeComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
