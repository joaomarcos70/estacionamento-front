import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { VehiclesComponent } from './views/vehicles/vehicles.component';
import { VehiclesCreateComponent } from './views/vehicles/vehicles-create/vehicles-create.component';
import { VehiclesEditComponent } from './views/vehicles/vehicles-edit/vehicles-edit.component';
import { AuthComponent } from './views/auth/auth.component';
import { EstablishmentComponent } from './views/establishment/establishment.component';
import { CustomerComponent } from './views/customer/customer.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VehiclesComponent,
    VehiclesCreateComponent,
    VehiclesEditComponent,
    AuthComponent,
    EstablishmentComponent,
    CustomerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
