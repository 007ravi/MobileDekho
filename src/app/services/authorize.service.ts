import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  baseurl="http://localhost:8080/api/users/"
  constructor(private http:HttpClient) { }
  createUser(formdata:any){
    return this.http.post(this.baseurl,formdata);
  }

  getAllUsers()
  {
    return this.http.get(this.baseurl);
  }

  getUserByName(username:String,user:any)
  {
    return  this.http.post(this.baseurl+'loginName/'+username,user);
  }
}
