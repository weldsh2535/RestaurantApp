import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { OrderDetail } from 'src/Table/table';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  readonly APIURL = 'http://localhost:49347/api';
  constructor( private http: HttpClient) {
  }
  create(val: any) {
    return this.http.post(this.APIURL + '/OrderDetail', val);
  }
  getAllOrderDetail(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/OrderDetail');
  }
  updateOrderDetail(val: any) {
    return this.http.put(this.APIURL + '/OrderDetail/', val);
  }
  removeOrderDetail(id) {
    return this.http.delete(this.APIURL + '/OrderDetail/' + id).toPromise();
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
