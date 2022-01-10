import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {
  readonly APIURL = environment.apiURL;
  constructor( private http: HttpClient) {
  }
  create(val: any) {
    return this.http.post(this.APIURL + '/functionalitie', val);
  }
  getAllFunctionality(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/functionalitie');
  }
  updateFunctionality(val: any) {
    return this.http.put(this.APIURL + '/functionalitie/', val);
  }
  removeFunctionality(id) {
    return this.http.delete(this.APIURL + '/functionalitie/' + id).toPromise();
  }

}
