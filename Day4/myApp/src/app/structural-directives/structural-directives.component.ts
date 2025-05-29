import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {
movies=["Anaganaga",
  "Jersey",
  "Meiyazhagan",
  "Magal"
]
}
