import { HttpClient } from "@angular/common/http";
import { Injectable, Output, EventEmitter } from "@angular/core";
import { User } from "./classes/user";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  @Output() loggedStatus = new EventEmitter<boolean>();
  readonly API_usersList_URL = "http://localhost:3000/users";
  private userList: User[];
  private logged: boolean = false;

  constructor(private http: HttpClient) {}

  getUserList() {
    this.http
      .get<User[]>(this.API_usersList_URL)
      .subscribe(list => (this.userList = list));
  }

  get isLogged(): boolean {
    return this.logged;
  }

  singIn(name, pass): boolean {
    // let login = this.userList.find(el => el.name === name);
    // this.logged = login ? login.password === pass : false;
    // this.loggedStatus.emit(this.logged);
    // return this.logged;
    return true;
  }

  signOut(): boolean {
    this.loggedStatus.emit(false);
    return (this.logged = false);
  }
}
