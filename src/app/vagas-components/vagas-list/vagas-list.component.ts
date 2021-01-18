import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../services/api-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-vagas-list',
  templateUrl: './vagas-list.component.html',
  styleUrls: ['./vagas-list.component.css']
})
export class VagasListComponent implements OnInit {

  list: any;

  list$: Observable<any>;

  constructor(private service: ApiServiceService)
  {
    this.list = ['1', '2', '3', '4', '5'];
    this.list$ = new Observable<any>();
  }

  ngOnInit(): void {
    this.loadVagas();
  }


  loadVagas(): void
  {
    this.list$ = this.service.get('vagas');
    this.list$.subscribe(data => {
      if (data.length > 0)
      {
        this.list = data;
        console.log(this.list);
      }
    });
  }

}
