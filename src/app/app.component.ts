debugger;
import {LoginPageComponent} from "./login/login-page/login-page.component";

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {LoginFormComponent} from "./login/login-form/login-form.component";
import {LoginService} from "./login/login.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginPageComponent, LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend-angular';
}
