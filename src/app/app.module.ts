import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HobbiesComponent } from './Components/hobbies/hobbies.component';
import { EducationComponent } from './Components/education/education.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { ConnectComponent } from './Components/connect/connect.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatToolbarModule } from "@angular/material/toolbar";
// ..................

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HobbiesComponent,
    EducationComponent,
    ProjectsComponent,
    ResumeComponent,
    ConnectComponent,
    HomeComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
