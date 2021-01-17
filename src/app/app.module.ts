import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Ng2IziToastModule } from 'ng2-izitoast';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BannerComponent } from './home/banner/banner.component';
import { DestaqueComponent } from './home/destaque/destaque.component';
import { AssinaturaComponent } from './home/assinatura/assinatura.component';
import { HomeCompartilharComponent } from './home/home-compartilhar/home-compartilhar.component';
import { VagasSearchComponent } from './vagas-components/vagas-search/vagas-search.component';
import { VagasListComponent } from './vagas-components/vagas-list/vagas-list.component';
import { CursosSearchComponent } from './cursos-components/cursos-search/cursos-search.component';
import { CursosDetailsComponent } from './cursos-views/cursos-details/cursos-details.component';
import { CursosUserComponent } from './cursos-views/cursos-user/cursos-user.component';
import { VagasDetailsComponent } from './vagas-views/vagas-details/vagas-details.component';
import { VagasUserComponent } from './vagas-views/vagas-user/vagas-user.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavMenuComponent,
    FooterBarComponent,
    SignupComponent,
    ForgetPasswordComponent,
    BannerComponent,
    DestaqueComponent,
    AssinaturaComponent,
    HomeCompartilharComponent,
    VagasSearchComponent,
    VagasListComponent,
    CursosSearchComponent,
    CursosDetailsComponent,
    CursosUserComponent,
    VagasDetailsComponent,
    VagasUserComponent,
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbCollapseModule,
    FontAwesomeModule,
    Ng2IziToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
