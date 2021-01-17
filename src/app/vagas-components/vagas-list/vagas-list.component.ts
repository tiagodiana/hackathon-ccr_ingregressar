import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vagas-list',
  templateUrl: './vagas-list.component.html',
  styleUrls: ['./vagas-list.component.css']
})
export class VagasListComponent implements OnInit {

  list: any;

  constructor()
  {
    this.list = ['1', '2', '3', '4', '5'];
  }

  ngOnInit(): void {
  }

}
