import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-basae',
  templateUrl: './basae.component.html',
  styleUrls: ['./basae.component.css']
})
export class BasaeComponent {

  @ViewChild('trailer', { static: true }) trailer!: ElementRef<HTMLVideoElement>; 

  constructor() { }

  ngOnInit() {
  }

  playVideo() {

    
    this.trailer.nativeElement.play(); 

  }

  stopVideo() {

    this.trailer.nativeElement.currentTime = 0;
    this.trailer.nativeElement.pause(); 


  }

}
