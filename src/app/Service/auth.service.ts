import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly APIURL = 'http://localhost:49347/api';
  constructor( private http: HttpClient) {
  }
  getAllAccount(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/Account');
  }
}
