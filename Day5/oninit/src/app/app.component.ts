
import { FormsModule } from '@angular/forms';
import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleMessageComponent } from './simple-message/simple-message.component';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,HelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// export class AppComponent implements OnInit{
 
//  message="";
//   ngOnInit():void{
//    this.message="Angular training";
//   }
// }




// export class AppComponent implements DoCheck{

//   title="Hello";
//   prevTit="Hello";
//     ngDoCheck(): void {
//         if(this.title !==this.prevTit){
//           console.log("Title property changed",this.title);
//           this.prevTit=this.title
//         }else{
//           console.log("same value");
//         }
//     }
// }


export class AppComponent {
 showHello=true;
}