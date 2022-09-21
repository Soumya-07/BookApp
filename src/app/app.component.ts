import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookApp';
  logoutvisible=false
  loginvisible=true
  constructor( private router:Router) {}
  ngOnInit() {

    this.router.navigate(['/home'])
     if(sessionStorage.getItem("code")!=null)
  {
    this.loginvisible=false
    this.logoutvisible=true;
  }


  }
login()
{
  this.router.navigate(['/Login'])
  // if(sessionStorage.getItem("code")==null)
  // {
  //   this.loginvisible=false
  //   this.logoutvisible=true;
  // }

}

logout()
{
  sessionStorage.clear()
  this.loginvisible=true
  this.logoutvisible=false;
  this.router.navigate(['/home'])
}
home()
{
  if(sessionStorage.getItem("code")==null)
  {
  this.loginvisible=true
  this.router.navigate(['/home'])
  }
  else
  {
this.router.navigate(['/userdash'])
  }
}

}
