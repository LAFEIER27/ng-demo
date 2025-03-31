import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SystemComponent} from './system.component';
import { AboutComponent } from './about/about.component';
import { MeComponent } from './me/me.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
      children: [
        {
          path: '',
          redirectTo: 'about',
          pathMatch: 'full',
        },
        {
          path: 'about',
          component: AboutComponent,
        },
        {
          path: 'me',
          component: MeComponent,
        },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
