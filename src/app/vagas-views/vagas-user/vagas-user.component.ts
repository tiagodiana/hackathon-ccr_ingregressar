import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vagas-user',
  templateUrl: './vagas-user.component.html',
  styleUrls: ['./vagas-user.component.css']
})
export class VagasUserComponent implements OnInit {

  listVagas = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}
