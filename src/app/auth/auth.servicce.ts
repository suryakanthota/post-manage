import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";

@Injectable({providedIn: "root"})

export class AuthService {
  constructor( private http: HttpClient ) {}

  createUser ( email: string, password: string ) {
    const userObj: User = {
      email: email,
      password: password
    };
    this.http.post("http://localhost:3000/api/user/signup", userObj)
      .subscribe( resp => {
        console.log("createUser resp", resp);
      });
  }

  login ( email: string, password: string ) {
    const userObj: User = {
      email: email,
      password: password
    };

    this.http.post("http://localhost:3000/api/user/login", userObj)
      .subscribe( resp => {
        console.log("login resp", resp);
      });
  }
}
