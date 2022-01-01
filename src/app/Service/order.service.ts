import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Order } from 'src/Table/table';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { SharedService } from './shared.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  RestaurantId = new BehaviorSubject<any>({});
  orderStatus = new BehaviorSubject<any>({});
  private orderCollectionList: AngularFirestoreCollection<any>;
  private orderList: Observable<Order[]>;
  amount: number;
  private order = [];
  private orderItemCount = new BehaviorSubject(0);
  readonly APIURL = environment.apiURL;
  constructor(private http: HttpClient,
    private sharedService: SharedService) {
  }

  create(val: any) {
    return this.http.post(this.APIURL + '/order', val);
  }
  getAllOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.APIURL + '/order');
  }
  updateOrder(val: any) {
    return this.http.put(this.APIURL + '/order/', val);
  }
  updateOrderStatus(val: any) {
    return this.http.put(this.APIURL + '/orderstatus/', val);
  }
  updateRestaurantStatus(val: any) {
    return this.http.put(this.APIURL + '/restaurantstatus/', val);
  }
  updateStatus(val: any) {
    return this.http.put(this.APIURL + '/status/', val)
  }
  removeOrder(id) {
    return this.http.delete(this.APIURL + '/order/' + id).toPromise();
  }
  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    return Observable.throw(new AppError(error));
  }
  getCart() {
    return this.cart;
  }
  getOrders() {
    return this.order;
  }
  getCartItemCount() {
    return this.cartItemCount;
  }
  getOrderItemCount() {
    return this.orderItemCount;
  }
  getRestaurantId() {
    return this.RestaurantId;
  }
  getOrderStatus() {
    return this.orderStatus;
  }
  addOrder(items) {
    this.order = []
    this.amount = 0;
    this.order.forEach(el => {
      let index = this.order.indexOf(c => c.orderDetailsId === el.orderDetailsId)
      this.order.splice(index, 1)
    });
    this.orderItemCount.next(0);
    items.forEach(element => {
      this.amount = this.amount + element.amount
      let data = {
        CookingTime: element.CookingTime,
        DeliveryTime: element.DeliveryTime,
        Description: element.Description,
        Name: element.Name,
        Price: element.Price,
        amount: element.amount,
        categoryId: element.categoryId,
        id: element.Food,
        picture: element.picture,
        restaurantId: element.restaurantId,
        type: element.type,
        orderDetailsId: element.orderDetailsId,
      }
      this.order.push(data);
    });
    this.orderItemCount.next(this.orderItemCount.value + this.amount);
  }
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
