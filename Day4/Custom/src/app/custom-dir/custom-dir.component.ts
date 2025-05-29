import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-custom-dir',
  imports: [HighlightDirective],
  templateUrl: './custom-dir.component.html',
  styleUrl: './custom-dir.component.css'
})
export class CustomDirComponent {

}
