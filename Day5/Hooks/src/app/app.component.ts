import { FormsModule } from '@angular/forms';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChildComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
itemList=[
  {id:1,name:"Arun"},
  {id:2,name:"Babu"},
  {id:3,name:"Likitha"},
  {id:4,name:"Shravanthi"},
  {id:5,name:"Ganesh"},
]
 title="Hello";
 
}
