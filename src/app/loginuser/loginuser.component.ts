import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  correct=false
  loginUserForm!: FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private service:UserServiceService,public myap:AppComponent) { }

  ngOnInit(): void {
    this.loginUserForm=this.fb.group({

      usercode:['',Validators.required],
      pw:['',Validators.required]

    })
  }

dashboard()
{
  this.service.userlogin(this.loginUserForm.value).subscribe(data=>{
    if(data!=null)
    {
      // alert("Welcome "+data.uname)
      this.router.navigate(['/userdash'])
      sessionStorage.setItem("code",this.loginUserForm.value.usercode)
      this.myap.loginvisible=false
      this.myap.logoutvisible=true

    }
    else
    {
      this.correct=true
    }

  })


}
finalregister()
{
  this.router.navigate(['/register'])
}
forgotpassword()
{
  
}

}
