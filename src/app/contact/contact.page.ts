import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Service/account.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  listOfAccount:any;
  address: string;
  email: string;

  constructor(private accountService:AccountService) { }

  ngOnInit() {
    this.accountService.getAllAccount().subscribe(res=>{
      let id = localStorage.getItem('userId');
      this.address = res.find(c=>c.id==id).FirstTimeLocation;
      this.email = res.find(c=>c.id==id).email;
    })
  }
  buttonClick(){
    
  }
}
