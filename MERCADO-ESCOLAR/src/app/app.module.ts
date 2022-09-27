import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyServicesComponent } from './my-services/my-services.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HomeComponent,
    AboutComponent,
    MyServicesComponent,
    PageNotFoundComponent,
    LoginRegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
