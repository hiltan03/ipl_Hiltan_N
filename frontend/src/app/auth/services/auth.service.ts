import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { User } from "../../ipl/types/User";

@Injectable({
  providedIn:'root'
})

export class AuthService {

  constructor(private http: HttpClient) {}

  login(user: Partial<User>): Observable<{ [key: string]: string }> {
   //return new Observable();
   return this.http.post<{[key: string]: string}>('http://localhost:9876/user/login',user);
 
 
  }

  getToken() : string {
    return localStorage.getItem('token') || '';
  }

  getRole() : string {
    return '';
  }

  getUsers(): Observable<User[]> {
    return new Observable();
    
  }

  createUser(user: User): Observable<User> {
   // return new Observable();
   return this.http.post<User>('http://localhost:9876/user/register',user);
  }




}
