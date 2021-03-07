import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTES } from './app.routes';

//modules
import { PagesModule } from './pages/pages.module';

//component

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { HomeComponent } from './home/home.component';
import { InicioComponent } from './home/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

    HomeComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
