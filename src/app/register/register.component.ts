import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  codeno!: number;
  codeshow=false
  bshow=true
  registrationForm!:FormGroup
  constructor(private fb:FormBuilder,private router:Router,private userv:UserServiceService) { }

  ngOnInit(): void {
    this.codeno=Math.floor(1000 + Math.random() * 9000);
    this.registrationForm=this.fb.group({

      usercode:[this.codeno,Validators.required],
      uname:['',Validators.required],
      email:['',Validators.required],
      contact:['',Validators.required],
      pw:['',Validators.required],
      lang:['',Validators.required],



    })

  }

  generatecode()
  {
    
    this.codeshow=true
    this.bshow=false
  }
  registration()
  {
    this.userv.userreg(this.registrationForm.value).subscribe(data=>{
      if(data!=null)
      {
        alert("Registtration Succesfull, redirecting to login page")
        this.router.navigate(['/Login'])

      }
      else{
        alert("Registraion Failed")
      }
    })
  }
}
