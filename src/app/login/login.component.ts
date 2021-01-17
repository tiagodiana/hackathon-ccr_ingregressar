import { Component, OnInit } from '@angular/core';
import {Login} from '../class/login';
import {NgForm} from '@angular/forms';
import {FunctionsService} from '../services/functions.service';
import {ApiServiceService} from '../services/api-service.service';
import {Observable} from 'rxjs';
import {Response} from '../class/reponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;
  login$: Observable<Response>;
  senha: string;
  validate: boolean;

  constructor(
    private functions: FunctionsService,
    private service: ApiServiceService
  )
  {
    this.validate = false;
    this.senha = '';
    this.login = new Login();
    this.login$ = new Observable<Response>();
  }

  ngOnInit(): void {
  }


  sendLogin(form: NgForm): void
  {
      this.validate = false;
      if (!form.valid)
      {
        this.validate = true;
      }
      else
      {
        this.login.senha = this.functions.hash256(this.senha);

        this.login$ = this.service.login(this.login);
        this.login$.subscribe(data => {
          console.log(data);
          if (data.code === 1)
          {
            this.functions.setLocal('token', data.details.token);
            this.functions.setLocal('userName', data.details.userName);
            this.functions.setLocal('userEmail', data.details.userEmail);
            this.functions.setLocal('userType', data.details.userType);

            this.functions.showAlertSuccess(data.msg);

            this.functions.redirect('home');
          }
          else
          {
            this.functions.showAlertError(data.msg);
          }
        });
        console.log(this.login);
      }
  }



}
