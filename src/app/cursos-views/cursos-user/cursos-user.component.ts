import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-user',
  templateUrl: './cursos-user.component.html',
  styleUrls: ['./cursos-user.component.css']
})
export class CursosUserComponent implements OnInit {

  listCurso = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
