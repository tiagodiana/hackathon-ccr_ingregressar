import { Injectable } from '@angular/core';
import {Ng2IzitoastService} from 'ng2-izitoast';
import {SHA256} from 'crypto-js';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(
    private iziToast: Ng2IzitoastService,
    private router: Router
  ) { }

  /*
  * ALERTS BEGIN
  * */
  private destroyIzi(): void
  {
    this.iziToast.destroy();
  }

  public showAlertSuccess(msg: string): void
  {
    this.destroyIzi();
    this.iziToast.success({
      title: 'OK',
      message: msg,
      position: 'center'
    });
  }

  public showAlertError(msg: string): void
  {
    this.destroyIzi();
    this.iziToast.error({
      title: 'Erro',
      message: msg,
      position: 'center'
    });
  }

  public showAlertInfo(title: string, msg: string): void
  {
    this.destroyIzi();
    this.iziToast.error({
      title,
      message: msg,
      position: 'center'
    });
  }
  /*
  * END ALERTS
  * */

  /*--------------------------------------------------------------*/

  /*
  * LOCAL STORAGE
  * */

  public setLocal(key: string, value: string): void
  {
    localStorage.setItem(key, value);
  }

  public getLocal(key: string): string | null
  {
    return localStorage.getItem(key);
  }

  public deleteLocal(key: string): void
  {
    localStorage.removeItem(key);
  }

  public clearLocal(): void
  {
    localStorage.clear();
  }
  /*
  * END LOCAL STORAGE
  * */
  /*----------------------------------------------------------------*/

  /*
  * CRYPTO
  * */

  public hash256(val: string): string
  {
    return SHA256(val).toString();
  }

  /*
  * REDIRECT AND REFRESH
  * */
  public redirect(route: string, params: any = false): void
  {
    if (params)
    {
      this.router.navigate([`/${route}`, params]);
    }
    else
    {
      this.router.navigate([`/${route}`]);
    }
  }

  public refresh(route: string): void
  {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/${route}`]);
    });
  }

  /*
  * VERIFICATION
  * */
  public isLogin(): boolean
  {
    return !!this.getLocal('token');
  }

  public logout(): void
  {
    this.clearLocal();
    this.refresh('home');
  }
}
