import { Component } from '@angular/core';
import { trainings } from './data/trainings';
import { Training } from './models/training.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  trainings: Training[] = trainings;
}
