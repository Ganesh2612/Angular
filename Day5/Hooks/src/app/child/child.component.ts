import { Component, OnChanges, SimpleChanges,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges{

  @Input() items:any[] =[];
  @Input() title="";
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['items']){
     console.log("Items properties changed",changes['items']);
    }
      if(changes['title']){
        console.log("Title properties changed",changes['title'].firstChange);
      }
  }


}
