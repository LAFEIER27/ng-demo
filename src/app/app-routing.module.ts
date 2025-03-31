import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then(c => c.HomeModule),
  },
  {
    path: 'product',
    loadChildren: () => import('./page/product/product.module').then(c => c.ProductModule),
  },
  {
    path: 'system',
    loadChildren: () => import('./page/system/system.module').then(c => c.SystemModule),
  },
  {
    path: 'detail',
    loadChildren: () => import('./page/detail/detail.module').then(c => c.DetailModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () => import('./page/not-found/not-found.module').then(c => c.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
