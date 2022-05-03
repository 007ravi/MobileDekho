import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  repairMobile:any=[];
  allmobiles:any=[
    {
    "mId":"1",
    "name":"Samsung galaxys22",
    "Company":"samsung",
    "originalPrice":70000

    },
    {
      "mId":"2",
      "name":"Iphone 12",
      "Company":"APPLE",
      "originalPrice":75000
    },
    {
      "mId":"2",
      "name":"Iphone 13",
      "Company":"APPLE",
      "originalPrice":90000
    },
    {
      "mId":"1",
      "name":"Samsung galaxys22 ultra",
      "Company":"samsung",
      "originalPrice":90000
  
      },
      {
        "mId":"1",
        "name":"MI 125g",
        "Company":"MI",
        "originalPrice":25000
    
        }
  ]
  constructor() { }



  getAllMobiles():any{

    return this.allmobiles;
  }

  setRepairMobile(repairMobileArr:any){
    this.repairMobile=repairMobileArr;
  }

  getRepairMobile(){
    return this.repairMobile;
  }
}
