import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = new BehaviorSubject(null)
  baseURL = "https://route-egypt-api.herokuapp.com/"
  constructor(private _httpClient: HttpClient) { 
    let user = localStorage.getItem("userLogin");
    if (user) {
       this.setCurrentUser()
     }
  }


  signUp(formData): Observable<any> {
   return  this._httpClient.post(`${this.baseURL}signup`, formData)
  }

  signIn(formData): Observable<any> {
    return this._httpClient.post(`${this.baseURL}signin`, formData)
  }

  setCurrentUser() {
    let user = localStorage.getItem("userLogin")
    this.currentUser.next( jwt_decode(user));
  }
  removeCurrentUser() {
    localStorage.removeItem("userLogin")
    this.currentUser.next(null);
  }

  signOut(formData): Observable<any> {
    return this._httpClient.post(`${this.baseURL}signOut`, formData)
  }
}
