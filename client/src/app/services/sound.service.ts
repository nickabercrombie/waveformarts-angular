import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  appJson = new HttpHeaders({ 'Content-Type': 'application/json' });
  multiPart = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });

  constructor(private http: HttpClient) { }

  uploadSound(sound) {
    return this.http.post('/api/sounds/upload', sound, {headers: this.multiPart}).toPromise()
      .then(
        sound => {
          console.log(`sound: ${sound} had been uploaded`);
          return sound;
        }
      )
      .catch(err => { console.log('error uploading: ', err); return err; })
  }

  getSound(id) {
    return this.http.get('/api/sounds/getOne', id).toPromise()
      .then(sound => {
        console.log('fetched sound: ', sound);
        return sound;
      })
      .catch(err => err);
  }

}
