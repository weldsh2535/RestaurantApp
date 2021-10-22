import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { AccountService } from '../Service/account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss'],
})
export class AccountDetailsPage implements OnInit {
  regform = this.fb.group({})
  usePicker: boolean;
  constructor(private fb:FormBuilder,private platform:Platform,
    private accountService:AccountService) { }

  ngOnInit() {
    let id = localStorage.getItem("userId");
    this.accountService.getAllAccount().subscribe(res=>{
      this.regform.get('FullName').setValue(res.find(c=>c.id==id).FullName);
      this.regform.get('phonenumber').setValue(res.find(c=>c.id==id).phonenumber);
      this.regform.get('email').setValue(res.find(c=>c.id==id).email);
      this.regform.get('password').setValue(res.find(c=>c.id==id).password);
    })
    this.regform = this.fb.group({
      email: ["", Validators.email],
      phonenumber: ["", Validators.required],
      password: ["", Validators.required],
      FullName: ["", Validators.required],
    });
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
      this.platform.is('desktop')
    ) {
      this.usePicker = true;
    }
  }

  SaveAccount(){

  }
}
