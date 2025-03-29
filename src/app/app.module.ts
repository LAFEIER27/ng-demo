import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { SystemComponent } from './page/system/system.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { Page1Component } from './page/home/page1/page1.component';
import { Page2Component } from './page/home/page2/page2.component';
import { Page3Component } from './page/home/page3/page3.component';
import { AboutComponent } from './page/system/about/about.component';
import { MeComponent } from './page/system/me/me.component';
import { ChildComponent } from './page/home/page1/child/child.component';
import { HightlightDirective } from './utils/hightlight.directive';
import { ModalContentComponent } from './page/home/page2/modal-content/modal-content.component';
import { CopComponent } from './page/home/page3/cop/cop.component';
import { DetailComponent } from './page/detail/detail.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { GetPlaceDirective } from './utils/get-place.directive';
import { Page4Component } from './page/home/page4/page4.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    ProductComponent,
    SystemComponent,
    NavbarComponent,
    HeaderComponent,
    MainComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    AboutComponent,
    MeComponent,
    ChildComponent,
    HightlightDirective,
    ModalContentComponent,
    CopComponent,
    DetailComponent,
    NotFoundComponent,
    GetPlaceDirective,
    Page4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
