import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nevend',
  templateUrl: './nevend.component.html',
  styleUrls: ['./nevend.component.css']
})
export class NevendComponent {

  @Input() title = "Muitos mistérios o aguarda!";



}
