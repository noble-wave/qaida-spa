import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slideIndex = 0;
  imgPath = "/assets/Images/";


  constructor() { }

  ngOnInit(): void {
    // this.showSlides();
  }


  // showSlides() {
  //   let i;
  //   let slides: any = document.getElementsByClassName("mySlides");
  //   let dots: any = document.getElementsByClassName("dot");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }

  //   this.slideIndex++;                                                 //// Automatic Slideshow
  //   if (this.slideIndex > slides.length) { this.slideIndex = 1 }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   if (slides[this.slideIndex - 1]) {
  //     slides[this.slideIndex - 1].style.display = "block";
  //     dots[this.slideIndex - 1].className += " active";
  //   }

  //   setTimeout(() => { this.showSlides(); }, 2000); // Change image every 6 seconds

  // }
}
