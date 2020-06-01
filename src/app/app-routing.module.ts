import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestIntroComponent } from './test-intro/test-intro.component';
import { QuestionsComponent } from './questions/questions.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'take-test',
    pathMatch:'full'
  },
  {
    path:'take-test',
    component:TestIntroComponent
  },
  {
    path:'questions',
    component:QuestionsComponent
  },
  {
    path:'progress',
    component:ProgressComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
