import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  EtriviaLogo = "/assets/images/"

  constructor() { }

  ngOnInit(): void {
  }

}
