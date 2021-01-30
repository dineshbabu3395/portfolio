import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StepperEducationComponent } from './stepper-education/stepper-education.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
{
  path: 'projects', component: StepperComponent
} ,{
  path: '', redirectTo: 'projects', pathMatch: 'full'
},{
  path: 'education', component: StepperEducationComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
