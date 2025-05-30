import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
 carName:string="";
@Output() carAdded=new EventEmitter<string>();
 onSubmit(){
  console.log(this.carName);
  // Sending the values outside
  this.carAdded.emit(this.carName);
  this.carName='';
 }
}
