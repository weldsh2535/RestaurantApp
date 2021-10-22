import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  readonly APIURL = 'http://localhost:49347/api';
  constructor( private http: HttpClient) {
  }
  create(val: any) {
    return this.http.post(this.APIURL + '/UserRole', val);
  }
  getAllUserRole(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/UserRole');
  }
  updateUserRole(val: any) {
    return this.http.put(this.APIURL + '/UserRole/', val);
  }
  deleteUserRole(id) {
    return this.http.delete(this.APIURL + '/UserRole/' + id).toPromise();
  }

  getUerRoleId(userId: string) {
    return this.http.get<any>(this.APIURL + '/UserRole/' + userId);
  }

}