import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutQuizComponent } from './ajout-quiz/ajout-quiz.component';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { CoachQuizComponent } from './coach-quiz/coach-quiz.component';

const routes: Routes = [
  { path: 'ajout-quiz', component: AjoutQuizComponent },
  { path: 'quiz', component: QuizComponent },
{path: 'coach-space', component:CoachQuizComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
