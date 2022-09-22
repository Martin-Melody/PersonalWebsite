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
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatToolbarModule } from "@angular/material/toolbar";
// ..................

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// MDB
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
// ..................


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
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
