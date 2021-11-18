import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  readonly APIURL = environment.apiURL;
  constructor( private http: HttpClient) {
  }
  create(val: any) {
    return this.http.post(this.APIURL + '/Location', val);
  }
  getAllLocation(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/Location');
  }
  updateLocation(val: any) {
    return this.http.put(this.APIURL + '/Location/', val);
  }
  removeLocation(id) {
    return this.http.delete(this.APIURL + '/Location/' + id).toPromise();
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }
}
