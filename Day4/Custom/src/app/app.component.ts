import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomDirComponent } from './custom-dir/custom-dir.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Custom';
}
