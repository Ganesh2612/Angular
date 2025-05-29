import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StructuralDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
}
