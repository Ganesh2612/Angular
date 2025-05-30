import { Component,contentChildren, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-message',
  imports: [],
  templateUrl: './simple-message.component.html',
  styleUrl: './simple-message.component.css'
})


// export class SimpleMessageComponent implements OnInit{
// @ContentChildren('messageContent') messageElements!: QueryList<ElementRef>;

// ngAfterContentInit(): void {
//     this.messageElements.forEach(element=>{
//       console.log("Projected Content",element.nativeElement.textContent)
//     })
// }
// }

export class SimpleMessageComponent{
  count:number=0;
}