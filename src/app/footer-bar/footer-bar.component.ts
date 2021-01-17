import { Component, OnInit } from '@angular/core';

import { faFacebookSquare, faLinkedin, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.css']
})
export class FooterBarComponent implements OnInit {

  faFacebook = faFacebookSquare;
  faLinkedin = faLinkedin;
  faTwitter = faTwitterSquare;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
