import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly APIURL = 'http://localhost:49347/api';
  constructor( private http: HttpClient) {
  }
  create(val: any) {
    return this.http.post(this.APIURL + '/Categorie', val);
  }
  getAllCategory(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/Categorie');
  }
  updateCategory(val: any) {
    return this.http.put(this.APIURL + '/Categorie/', val);
  }
  removeCategory(id) {
    return this.http.delete(this.APIURL + '/Categorie/' + id).toPromise();
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
