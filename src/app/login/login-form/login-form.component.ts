debugger;
import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {UserCredentials} from "../model/user-credentials";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
  imports: [
    ReactiveFormsModule
  ],
  standalone: true
})
export class LoginFormComponent implements OnInit {
  loginForm = this.fb.group({
    username: "",
    password: "",
  });

  @Output() login = new EventEmitter<UserCredentials>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onLogin() {
    const username = this.loginForm.controls.username.value!;
    const password = this.loginForm.controls.password.value!;
    let obj = {username,password}
    this.login.emit(obj);
    console.log("in first")
  }
}
