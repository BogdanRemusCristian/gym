import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GalleriaModule } from 'primeng/galleria';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { TrainingComponent } from './components/training/training.component';
import { SidebarModule } from 'primeng/sidebar';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    TrainingComponent,
    ExerciseComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    GalleriaModule,
    AppRoutingModule,
    SidebarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
