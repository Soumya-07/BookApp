import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { window } from 'rxjs';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  code!:number
  temp:any
  addbooksform!:FormGroup
  constructor(private fb:FormBuilder,private router:Router,private userv:UserServiceService) { }

  ngOnInit(): void {
    this.temp=sessionStorage.getItem('code')
    this.code=parseInt(this.temp)
    this.addbooksform=this.fb.group({
      bname:['',Validators.required],
      author:['',Validators.required],
      publisher:['',Validators.required],
      genre:['',Validators.required],
      language:['',Validators.required],
      price:['',Validators.required]

    })
  }



addbooks()
{
this.userv.addbook(this.code,this.addbooksform.value).subscribe(data=>
  {
    if(data!=null)
    {
      alert("book succesfully added")
      this.router.navigate(['/userdash'])
    }
    else{
      alert("You have this book already")
      location.reload();
    }
  })
}

}
