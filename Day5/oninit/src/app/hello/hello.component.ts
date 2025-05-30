import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})

// export class HelloComponent implements AfterViewInit{


// //focus the iput once the view initialize

// @ViewChild('nameInput') nameInput!:ElementRef;

// ngAfterViewInit(): void {
//     this.nameInput.nativeElement.focus();
// }
//  }

export class HelloComponent 
implements OnInit
 ,OnDestroy
{
  counter:number =0;
private intervalId:any;

  ngOnInit(): void {
      this.intervalId=
      setInterval(()=>{
        this.counter++;
      },1000);
      console.log('Interval Id',
        this.intervalId)
      
  }

  //clear the timer

  ngOnDestroy(): void {
      clearInterval(
      this.intervalId);
      console.log("OnDestroy timer Stopped");
  }
}
