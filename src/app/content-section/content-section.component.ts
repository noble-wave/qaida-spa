import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit {

  contentImage = "/assets/Images/";

  constructor() { }

  ngOnInit(): void {
  }

}
