import { Component, Input } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.type';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesComponent {
  @Input() exercises: Exercise[] = [];
}
