import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  appJson = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  uploadMessage(data) {
    this.http.post('/api/messages/upload', data, {headers: this.appJson}).toPromise()
      .then(message => message)
      .catch(err => err);
  }

  getAllMessages() {
    return this.http.get('/api/messages/fetchAll').toPromise()
      .then(messages => messages)
      .catch(err => err);
  }

  getOneMessage(id) {
    return this.http.get('/api/messages/fetchOne', {params: id}).toPromise()
        .then(message => message)
        .catch(err => err);
  }

  deleteOneMessage(id) {
    return this.http.post('/api/messages/delete', id, {headers: this.appJson}).toPromise()
    .then(() => { console.log('deleted successfully'); })
    .catch(err => { console.log('error deleting: ', err) });
  }
}
