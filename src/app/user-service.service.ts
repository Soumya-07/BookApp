import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/User';
import { Booklist } from 'src/models/Booklist';
import { readlist } from 'src/models/readlist';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

baseURL:string="http://localhost:9090/bookapp"
  constructor(private httpser:HttpClient) { }


  public userlogin(user:User)
  {
    return this.httpser.post<User>(this.baseURL+"/login",user)
  }
  public userreg(user:User)
  {
    return this.httpser.post<User>(this.baseURL+"/users",user)
  }
  public addbook(usercode:number,blist:Booklist)
  {
    return this.httpser.post<Booklist>(this.baseURL+"/addbooks/"+usercode,blist)
  }
  public showbook(uc:number)
  {
    return this.httpser.get<Booklist[]>(this.baseURL+"/booklist/"+uc)
  }
  public delbook(bid:number)
  {
    return this.httpser.delete<Booklist>(this.baseURL+"/delbook/"+bid)
  }
  public addreadbook(uc:number,rlist:readlist)
  {
    return this.httpser.post<readlist>(this.baseURL+"/addreadbooks/"+uc,rlist)
  }
  public showreadbook(uc:number)
  {
    return this.httpser.get<readlist[]>(this.baseURL+"/readbooklist/"+uc)
  }
  public upprice(uc:number,blist:Booklist)
  {
    return this.httpser.post<Booklist>(this.baseURL+"/updateprice/"+uc,blist)
  }
}
