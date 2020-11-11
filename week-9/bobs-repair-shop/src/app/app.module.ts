import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ServiceCartComponent } from './components/service-cart/service-cart.component';
import { ServicesComponent } from './components/service-cart/services/services.component';
import { ServiceInfoComponent } from './components/service-cart/service-info/service-info.component';
import { CartComponent } from './components/service-cart/cart/cart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';
import { CartItemComponent } from './components/service-cart/cart/cart-item/cart-item.component';
import { ServiceItemComponent } from './components/service-cart/service-info/service-item/service-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ServiceCartComponent,
    ServicesComponent,
    ServiceInfoComponent,
    CartComponent,
    CartItemComponent,
    ServiceItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
