import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  readonly APIURL = 'http://localhost:49347/api';
  constructor( private http: HttpClient) {
  }
  create(val: any) {
    return this.http.post(this.APIURL + '/Restaurant', val);
  }
  getAllRestaurant(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/Restaurant');
  }
  updateRestaurant(val: any) {
    return this.http.put(this.APIURL + '/Restaurant/', val);
  }
  removeRestaurant(id) {
    return this.http.delete(this.APIURL + '/Restaurant/' + id).toPromise();
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
