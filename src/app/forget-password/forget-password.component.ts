import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public params: string;

  constructor(activeRoute: ActivatedRoute)
  {
    this.params = activeRoute.snapshot.params[`token`];
  }

  ngOnInit(): void {
    
  }

}
