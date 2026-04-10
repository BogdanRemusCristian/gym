import { Component, Input, ViewChild } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.type';
import { Galleria } from 'primeng/galleria';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent {
  @ViewChild(Galleria, { static: true }) galleria: Galleria;
  @Input() exercise: Exercise = null;
  @Input() index: number = null;
  private _activeIndex: number = 0;

  touchStartX = 0;
  touchEndX = 0;

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(newValue) {
    if (
      this.exercise.images &&
      0 <= newValue &&
      newValue <= this.exercise.images.length - 1
    ) {
      this._activeIndex = newValue;
    }
    if (newValue < 0) {
      this._activeIndex = this.exercise.images.length + newValue;
    }

    if (newValue >= this.exercise.images.length) {
      this._activeIndex = 0;
    }
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.onSwipe();
  }

  onSwipe() {
    const diff = this.touchEndX - this.touchStartX;

    if (diff < -50) this.activeIndex++;
    if (diff > 50) this.activeIndex--;
  }
}
