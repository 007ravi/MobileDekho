import { Component, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {
mobiles:any;
fixedMobiles:any;
selectedPrice:any='All Prices';
selectedCompany:any='All Brands';
mobileName:any=["APPLE","SAMSUNG","MI","REALME","MOTOROLA"];
mobilePrice:any=["<10k",">=10k and <20k",">=20k and <50k",">=50k and <80k",">=80k"]
repairMobileArr:any=[];
loader=true;

  constructor(private mobileService:MobileService,private router:Router) {

    this.mobiles=this.mobileService.getAllMobiles();
    this.fixedMobiles=this.mobiles;
this.repairMobileArr=this.mobileService.getRepairMobile();
setTimeout(()=>{
this.loader=false;
},3000)
       }
    
      ngOnInit(): void {
      }

      selectOptionPrice(index:any){
        console.log("Price"+index.target.value);
        this.selectedPrice=index.target.value;
        this.filterData();
      }

      selectOptionMobile(index:any){
console.log("Mobile"+index.target.value);
this.selectedCompany=index.target.value;
this.filterData();
      }


      filterData(){
        let company=this.selectedCompany;
        let lowPrice:any;
        let highPrice:any;
        switch(this.selectedPrice)
        {
          case '<10k': {
            lowPrice=0;highPrice=9999;
          break;
          }
          case '>=10k and <20k': {
            lowPrice=10000;highPrice=19999;
          break;
          }
          case '>=20k and <50k': {
            lowPrice=20000;highPrice=49999;
          break;
          }
          case '>=50k and <80k': {
            lowPrice=50000;highPrice=79999;
          break;
          }
          case '>=80k': {
            lowPrice=80000;highPrice=999999;
          break;
          }
        }
        console.log(lowPrice +"  "+highPrice);
      this.mobiles=this.fixedMobiles.filter(function(mobile:any) {
        if(company!='All Brands' && lowPrice!=undefined)
          return (mobile.Company.toUpperCase()==company && (mobile.originalPrice>=lowPrice && mobile.originalPrice<highPrice));
       else if(company=='All Brands' && lowPrice!=undefined)
       return (mobile.originalPrice>=lowPrice && mobile.originalPrice<highPrice);
       else if(company!='All Brands' && lowPrice==undefined)
       return (mobile.Company.toUpperCase()==company);
       else 
       return (mobile );
        });
        console.log(this.mobiles);
      }

      goToRepair(){
        this.mobileService.setRepairMobile(this.repairMobileArr);
        this.router.navigateByUrl('/repairList');

      }
      Repair(mobile:any){
        let found=false;
        for (var i=0; i<this.repairMobileArr.length; i++) { //iterate through each object in an array
          if (JSON.stringify(this.repairMobileArr[i]) === JSON.stringify(mobile) ) {
            found=true;     
            break;
           }
     }
     if(!found)
     {
       this.repairMobileArr.push(mobile);
       console.log(this.repairMobileArr);
       this.mobileService.setRepairMobile(this.repairMobileArr);
     }
        
      }
}
