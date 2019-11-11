import { AuthenticationService } from "src/app/services/authentication.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  private logged: boolean = false;
  private errorMessage: string = "";

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.checkLogged();
    //this.authenticationService.getUserList();
  }

  checkLogged() {
    this.logged = this.authenticationService.isLogged;
  }

  signIn(fields) {
    this.logged = this.authenticationService.singIn(
      fields.name,
      fields.password
    );
    if (!this.logged) {
      this.showErrorMessage("You have to enter valid information");
    }
  }

  signOut() {
    this.logged = this.authenticationService.signOut();
  }

  showErrorMessage(message: string) {
    this.errorMessage = message;
    setTimeout(() => (this.errorMessage = ""), 2000);
  }
}
