import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {CursosDetailsComponent} from './cursos-views/cursos-details/cursos-details.component';
import {CursosUserComponent} from './cursos-views/cursos-user/cursos-user.component';
import {VagasDetailsComponent} from './vagas-views/vagas-details/vagas-details.component';
import {VagasUserComponent} from './vagas-views/vagas-user/vagas-user.component';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';
import {VocationalTestComponent} from './vocational-test/vocational-test.component';
import {CursosAllComponent} from './cursos-views/cursos-all/cursos-all.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forgetpassword', component: ForgetPasswordComponent},
  {path: 'forgetpassword/:token', component: ForgetPasswordComponent},
  {path: 'cursos', component: CursosAllComponent},
  {path: 'cursosDetails/:id', component: CursosDetailsComponent},
  {path: 'cursosUser', component: CursosUserComponent},
  {path: 'vagasDetails/:id', component: VagasDetailsComponent},
  {path: 'vagasUser', component: VagasUserComponent},
  {path: 'userEdit', component: ProfileEditComponent},
  {path: 'vocationalTest', component: VocationalTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
