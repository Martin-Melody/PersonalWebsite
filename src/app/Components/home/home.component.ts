import { Component, OnInit, OnDestroy } from '@angular/core';
// import { faLinkedin, faGithub, faMicrosoft  } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // faLinkedin = faLinkedin;
  // faGithub = faGithub;
  // faMicrosoft = faMicrosoft;

  constructor() {}

  ngOnInit(): void {
    document.body.className = 'selector';
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  goToLinkedIn(){
    window.location.href = 'https://www.linkedin.com/in/martinmelody/';
  }

  goToGithub(){
    window.location.href = 'https://github.com/Martin-Melody';
  }
}
