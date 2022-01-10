import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  readonly APIURL = environment.apiURL;
  constructor(private http: HttpClient) {
  }
  create(val: any) {
    return this.http.post(this.APIURL + '/userrole', val);
  }
  getAllUserRole(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/userrole');
  }
  updateUserRole(val: any) {
    return this.http.put(this.APIURL + '/userrole/', val);
  }
  deleteUserRole(id) {
    return this.http.delete(this.APIURL + '/userrole/' + id).toPromise();
  }
  getUerRoleId(userId: string) {
    return this.http.get<any>(this.APIURL + '/userrole/' + userId);
  }

}
