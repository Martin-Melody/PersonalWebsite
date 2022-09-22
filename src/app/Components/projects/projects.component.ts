import { Component, OnInit } from '@angular/core';
import { Route, Router } from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  GoToMartype() {
    this._router.navigate(['/', 'home']);
  }

  GoToMarFlip() {
    this._router.navigate(['/', 'home']);
  }
}
