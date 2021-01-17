import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  validator: boolean;

  constructor()
  {
    this.validator = false;
  }

  ngOnInit(): void {
  }

  editUser(form: NgForm): void
  {
    this.validator = false;
    console.log(form);
    if (!form.valid)
    {
      this.validator = true;
      return;
    }
    else
    {

    }

  }

}
