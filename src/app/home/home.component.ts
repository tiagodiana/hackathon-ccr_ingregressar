import { Component, OnInit } from '@angular/core';
import {FunctionsService} from '../services/functions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isLogin: boolean;
  public userType: string | null;

  constructor(private functions: FunctionsService)
  {
    this.userType = this.functions.getLocal('user');
    this.isLogin = this.functions.isLogin();
  }

  ngOnInit(): void {
  }

}
