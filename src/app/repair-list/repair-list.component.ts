import { Component, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit {
repairMobiles:any;
  constructor(private mobileService:MobileService,private router:Router ) {
    this.repairMobiles=this.mobileService.getRepairMobile();
    console.log();
   }

  ngOnInit(): void {

  }
Delete(mobile:any){
  console.log('remove');
  let found=false;
  let index;
  for (var i=0; i<this.repairMobiles.length; i++) { //iterate through each object in an array
    if (JSON.stringify(this.repairMobiles[i]) === JSON.stringify(mobile) ) {
      found=true;
      index=i;     
      break;
     }
}
if(found)
{
  this.repairMobiles.splice(index,1);
  console.log(this.repairMobiles);
  this.mobileService.setRepairMobile(this.repairMobiles);
}
}
}
