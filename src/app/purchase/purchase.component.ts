import { Component, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  mobiles:any=[
    {
    "mId":"1",
    "name":"Samsung galaxys22",
    "Company":"samsung",
    "originalPrice":"70k"

    },
    {
      "mId":"2",
      "name":"Iphone 14",
      "Company":"APPLE",
      "originalPrice":"85k"
    },
    {
      "mId":"2",
      "name":"Iphone 14",
      "Company":"APPLE",
      "originalPrice":"85k"
    },
    {
      "mId":"1",
      "name":"Samsung galaxys22",
      "Company":"samsung",
      "originalPrice":"70k"
  
      }
  ]
  constructor(private mobileService:MobileService) {

this.mobiles=this.mobileService.getAllMobiles();
   }

  ngOnInit(): void {
  }

}
