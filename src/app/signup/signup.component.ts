import { Component, OnInit } from '@angular/core';
import {Jovem} from '../class/jovem';
import {NgForm} from '@angular/forms';
import {FunctionsService} from '../services/functions.service';
import {Observable} from 'rxjs';
import {ApiServiceService} from '../services/api-service.service';
import {Response} from '../class/reponse';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public jovem: Jovem;
  public senha: string;
  public csenha: string;

  private signup$: Observable<Response>;

  public validator: boolean;

  constructor(private functions: FunctionsService, private service: ApiServiceService)
  {
    this.jovem = new Jovem();
    this.signup$ = new Observable<Response>();
    this.senha = '';
    this.csenha = '';
    this.validator = false;
  }

  ngOnInit(): void {
  }

  signup(form: NgForm): void
  {
    /*VALIDANDO FORMULARIO*/
    this.validator = false;
    if (!form.valid)
    {
      this.validator = true;
    }
    else
    {
      if (this.jovem.nome.split(' ').length === 1)
      {
        this.functions.showAlertError('Digie seu nome completo');
        return;
      }

      if (this.senha !== this.csenha)
      {
        this.functions.showAlertError('As senhas informadas são diferentes');
        return;
      }

      /*CRIPTOGRAFANDO SENHA*/
      const date = new Date();
      this.jovem.senha = this.functions.hash256(this.senha);
      this.jovem.token = this.functions.hash256(this.jovem.email + this.jovem.nome + 'ingressar' + date.getTime());

      /*REQUISIÇÃO COM API*/
      this.signup$ = this.service.set('jovem', this.jovem);
      this.signup$.subscribe(data => {
        console.log(data);
        if (data.code === 1)
        {
          this.functions.showAlertSuccess(data.msg);
          this.functions.setLocal('userName', data.details.nome);
          this.functions.setLocal('userEmail', data.details.email);
          this.functions.setLocal('userType', 'user');
          this.functions.setLocal('token', data.details.token);
          this.functions.redirect('home');
        }
        else
        {
          this.functions.showAlertError(data.msg);
        }
      }, error => {
        console.log(error);
        this.functions.showAlertError('Erro ao conectar ao servidor!');
      });
    }
  }

}
