import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  appJson = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post('/api/user/login', data, {headers: this.appJson}).toPromise()
      .then(success => {
        if(success) { return success; }
        console.log('error logging in: ', success);
      })
      .catch(err => err);
  }

  register(data) {
    return this.http.post('/api/user/register', data, {headers: this.appJson}).toPromise()
      .then(user => {
        console.log('user registered: ', user);
        return user;
      })
      .catch(err => err);
  }

}
