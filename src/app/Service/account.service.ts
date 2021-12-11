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
export class AccountService {

  readonly APIURL = environment.apiURL;
  constructor(private http: HttpClient) {
  }
  create(val: any) {
    return this.http.post(this.APIURL + '/account', val);
  }
  getAllAccount(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/account');
  }
  updateAccount(val: any) {
    return this.http.put(this.APIURL + '/account/', val);
  }
  removeAccount(id) {
    return this.http.delete(this.APIURL + '/account/' + id).toPromise();
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
