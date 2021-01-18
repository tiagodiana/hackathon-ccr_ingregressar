import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-vocational-test',
  templateUrl: './vocational-test.component.html',
  styleUrls: ['./vocational-test.component.css']
})
export class VocationalTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendTest(form: NgForm): void
  {
    console.log(form);
  }

}
