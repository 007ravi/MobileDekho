import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../services/authorize.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginobj:any={
  username:"",
  firstname:"",
  lastname:"",
  password: "",
  email: "",
}
error='';
  constructor(private userService:AuthorizeService,private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log(JSON.stringify(this.loginobj));
    this.userService.getUserByName(this.loginobj.username,this.loginobj).subscribe(
      (data:any)=> {console.log(data)
        sessionStorage.setItem("user",'login');
        this.router.navigateByUrl('/repair').then(() => {
          window.location.reload();
        });
      },
      (err:any)=> {console.log(err)
      this.error=err.error.message;
      console.log(err.error);
      }
      );
      
      // sessionStorage.setItem("user",'login');
      //   this.router.navigateByUrl('/repair') .then(() => {
      //     window.location.reload();
      //   });




  }
}
