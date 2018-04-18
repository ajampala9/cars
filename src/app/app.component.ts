import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  show: boolean=false;

open(){
  this.show=true;
}



}
