import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  regform = this.fb.group({});
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.regform = this.fb.group({
      notification:[""],
      orderUpdate:[""]
    })
  }
  Save(){
    
  }
}
