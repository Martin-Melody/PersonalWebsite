import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './Components/connect/connect.component';
import { EducationComponent } from './Components/education/education.component';
import { HobbiesComponent } from './Components/hobbies/hobbies.component';
import { HomeComponent } from './Components/home/home.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ResumeComponent } from './Components/resume/resume.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'connect', component:ConnectComponent},
  {path:'education', component:EducationComponent},
  {path:'hobbies', component:HobbiesComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'resume', component:ResumeComponent},
  {path:'**', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
