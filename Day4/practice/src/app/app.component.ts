import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
//   title = 'practice';
//   fullname="Ganesh";
//   getage(){
//     return 21;
//   }
//  user:any=null;
//  ngOnInit(){
//   this.user={
//     name:"Kala"
//   }
//  }
//   imagealt="animal image";

clickCount=0;
clickMe(){
  this.clickCount++;
}
}
