import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
loginUser:any="logout";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginUser=sessionStorage.getItem("user");
    if(this.loginUser==null)
    this.loginUser="logout";
  }
  logout(){
    sessionStorage.setItem("user",'logout');
    this.loginUser="logout";
        this.router.navigateByUrl('/purchase');
  }

}
