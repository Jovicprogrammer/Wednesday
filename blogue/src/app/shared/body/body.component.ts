import { Component, ViewChild, ElementRef, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Output() changehand: EventEmitter<any> = new EventEmitter()

  @ViewChild('trailer', { static: true }) trailer!: ElementRef<HTMLVideoElement>; 
  

  show: boolean = true; 
  unshow: boolean = true; 


  constructor() { }

  ngOnInit() {}

  showImager(): void {

  this.show = !this.show
 

  }

  showImager2(): void {

  this.show = !this.show


  }

  
  playVideo() {

    
    this.trailer.nativeElement.play(); 

  }

  stopVideo() {

    this.trailer.nativeElement.currentTime = 0;
    this.trailer.nativeElement.pause(); 


  }

}
