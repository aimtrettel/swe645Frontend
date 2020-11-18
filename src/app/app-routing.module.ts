import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimpleAckComponent } from './simple-ack/simple-ack.component';
import { SurveyComponent } from './survey/survey.component';
import { StudentComponent } from './student/student.component';
import { IdsComponent } from './ids/ids.component';

const routes: Routes = [
  { path: 'simple', component: SimpleAckComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'surveys', component: IdsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
