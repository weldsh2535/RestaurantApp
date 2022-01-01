import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Restaurant } from 'src/Table/table';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  readonly APIURL = environment.apiURL;
  constructor(private http: HttpClient) {
  }
  create(val: any) {
    return this.http.post(this.APIURL + '/restaurant', val);
  }
  getAllRestaurant(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.APIURL + '/restaurant');
  }
  updateRestaurant(val: any) {
    return this.http.put(this.APIURL + '/restaurant/', val);
  }
  removeRestaurant(id) {
    return this.http.delete(this.APIURL + '/restaurant/' + id).toPromise();
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
