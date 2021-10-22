import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { RestMenu } from 'src/Table/table';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class RestMenuService {
  private restMenuCollectionList: AngularFirestoreCollection<any>;
  private restMenuList: Observable<any[]>;
  constructor(private db: AngularFirestore) {
    this.restMenuCollectionList = db.collection<RestMenu>('RestMenu');
  }
  create(restMenuObj) { 
    return this.restMenuCollectionList.add(restMenuObj)
  }
  getAllRestMenu() {
    this.restMenuList = this.restMenuCollectionList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.restMenuList;
  }
  getRestMenu(id) {
    return this.restMenuCollectionList.doc<any>(id).valueChanges();
  }
  updateRestMenu(restMenuObj: RestMenu, id: string) {
    return this.restMenuCollectionList.doc(id).update(restMenuObj)
    .catch(this.handleError);
  }
  removeRestMenu(id) {
    return this.restMenuCollectionList.doc(id).delete()
    .catch(this.handleError);
  }
  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
     return Observable.throw(new AppError(error));
  }
}
