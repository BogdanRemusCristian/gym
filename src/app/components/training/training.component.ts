import { Component, Input } from '@angular/core';
import { Training } from 'src/app/models/training.type';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent {
  @Input() training: Training = null;
  showTraining: boolean = false;
}
