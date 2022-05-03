import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { SellComponent } from './sell/sell.component';
import { RepairComponent } from './repair/repair.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { GuardService } from './services/guard.service';
import { RepairListComponent } from './repair-list/repair-list.component';

const routes: Routes = [
  {
    path:'purchase',
    component:PurchaseComponent,
  },
  {
    path:'sell',
    component:SellComponent,
    pathMatch:'full',
    canActivate:[GuardService]
  },
  {
    path:'repair',
    component:RepairComponent,
    pathMatch:'full',
    canActivate:[GuardService]
  },
  {
    path:'repairList',
    component:RepairListComponent,
    pathMatch:'full',
    canActivate:[GuardService]
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
