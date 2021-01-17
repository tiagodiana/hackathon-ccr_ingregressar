import { Component, OnInit } from '@angular/core';
import {FunctionsService} from '../services/functions.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  public isCollapsed = true;
  public menuCollapsed = false;
  public isLogin: boolean;

  public userName: string | null;
  public userType: string | null;

  constructor(public functions: FunctionsService)
  {
    this.isLogin = this.functions.isLogin();
    this.userName = '';
    this.userType = '';
    if (this.isLogin)
    {
      this.userName = this.functions.getLocal('userName');
      this.userType = this.functions.getLocal('userType');
    }
  }

  ngOnInit(): void {
    console.log(this.isLogin);
  }

}
